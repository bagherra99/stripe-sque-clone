import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "/security" },
      { name: "Integrations", href: "/integrations" },
    ],
    Resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Help Center", href: "/help" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Press", href: "/press" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  }

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/sque", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com/company/sque", icon: Linkedin },
    { name: "GitHub", href: "https://github.com/sque", icon: Github },
    { name: "Email", href: "mailto:hello@sque.ai", icon: Mail },
  ]

  return (
    <footer className="bg-sidebar border-t border-sidebar-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold text-lg">
                S
              </div>
              <span className="text-xl font-bold text-sidebar-foreground">Sque</span>
            </Link>
            <p className="text-sidebar-foreground/70 max-w-sm text-pretty">
              The Legal Revenue & Operating System that captures work automatically and runs billing as your system of
              record.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-semibold text-sidebar-foreground uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-sidebar-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sidebar-foreground/70 text-sm">© 2025 Sque. All rights reserved.</p>
          <p className="text-sidebar-foreground/70 text-sm">Made with ❤️ by bagherra for legal professionals worldwide</p>
        </div>
      </div>
    </footer>
  )
}