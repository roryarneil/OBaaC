export default function TrustSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display mb-8 text-3xl text-foreground md:text-4xl">
          Trust. Bank-Grade Security. Zero Password Sharing.
        </h2>
        <div className="space-y-4 text-left text-base leading-relaxed text-foreground/80 md:text-lg">
          <p>
            To calculate your rewards, OBaaC verifies your transactions and
            travel bookings securely using technical service providers, like
            Plaid, that are regulated by financial service providers such as the
            Financial Conduct Authority in the UK or the Dutch Central Bank in
            the EU.
          </p>
          <p>
            <strong>How it works:</strong> When you connect your bank, you never
            share your password. The bank issues a secure, read-only digital
            token that works just like a valet key that allows you to lock your
            valuables in the glove box and in the boot of your car, while
            enabling a trusted parking attendant to park your car. You remain in
            complete control and can revoke this access instantly at any time.
          </p>
          <p>
            In the US alone, over 100 million people use Plaid for open banking
            - that&apos;s half of all people with a bank account
          </p>
        </div>
      </div>
    </section>
  );
}
