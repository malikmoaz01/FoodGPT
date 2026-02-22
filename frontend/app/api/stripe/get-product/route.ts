import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan } = body;

    if (!plan || (plan !== 'pro' && plan !== 'chef')) {
      return NextResponse.json(
        { error: 'Invalid plan' },
        { status: 400 }
      );
    }

    // Define product IDs from environment
    const productId = plan === 'pro'
      ? process.env.NEXT_PUBLIC_STRIPE_PRO_PRODUCT_ID
      : process.env.NEXT_PUBLIC_STRIPE_CHEF_PRODUCT_ID;

    if (!productId) {
      return NextResponse.json(
        { error: 'Product not configured' },
        { status: 500 }
      );
    }

    // Retrieve the product with its prices
    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price'],
    });

    return NextResponse.json({
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        price: (product.default_price as Stripe.Price).unit_amount,
        currency: (product.default_price as Stripe.Price).currency,
      },
    });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to retrieve product' },
      { status: 500 }
    );
  }
}
