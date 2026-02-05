import Link from "next/link";

export default function CTA() {
  return (
     <section className="glass-cta">
        <div className="glass-box">
          <div className="cta-logo-text">SF</div>
          <h2>Ready to simplify your sales process?</h2>
          <p>SalesFlow helps your team focus on what matters most — closing.</p>
          <Link href="/contact" className="b-book">Book Free Call</Link>
          <div className="cta-email">
            <span>Prefer Email?</span>
            <a href="mailto:info@salesflow.com">info@salesflow.com</a>
          </div>
        </div>
      </section>
  );
}
