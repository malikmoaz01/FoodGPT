import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, plan, email, name } = body;

    if (!amount || !plan || !email || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // amount in cents
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: {
        plan,
        email,
        name,
      },
      description: `FoodGPT ${plan} subscription`,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: error.message || 'Payment intent creation failed' },
      { status: 500 }
    );
  }
}
