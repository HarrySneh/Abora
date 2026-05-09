import { stripePromise } from "../../lib/stripe";

export function PaymentButton() {
  async function handleCheckout() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/create-checkout-session`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            amount: 5000,
          }),
        },
      );

      const session = await response.json();

      const stripe = await stripePromise;

      await stripe?.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      className="
        btn-primary
        w-full
      "
    >
      Pay Deposit
    </button>
  );
}
