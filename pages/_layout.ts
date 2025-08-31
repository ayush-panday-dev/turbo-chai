import { generateTDHLayout } from "turbo-dynamic-html";

const layout = generateTDHLayout({
  render(data, children) {
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Ghar Ghar Me TEA - Your Daily Chai Destination</title>

          <!-- Google Fonts (Poppins) -->
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />

          <!-- Font Awesome for Icons -->
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          />

          <!-- Custom Stylesheet -->
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <!-- ============================ -->
          <!--          HEADER              -->
          <!-- ============================ -->
          <header class="site-header">
            <div class="container">
              <div class="logo">
                <a href="index.html">
                  <i class="fas fa-mug-hot"></i> Ghar Ghar Me <span>TEA</span>
                </a>
              </div>
              <nav class="main-nav">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Our Blends</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
              <div class="header-actions">
                <div class="search-bar">
                  <input type="text" placeholder="Search for your chai..." />
                  <button><i class="fas fa-search"></i></button>
                </div>
                <a href="#" class="action-icon" aria-label="Shopping Cart"
                  ><i class="fas fa-shopping-cart"></i
                ></a>
                <a href="#" class="action-icon" aria-label="User Account"
                  ><i class="fas fa-user"></i
                ></a>
              </div>
            </div>
          </header>

          <!-- ============================ -->
          <!--       MAIN CONTENT AREA      -->
          <!-- ============================ -->
          <main class="site-content">${children}</main>

          <!-- ============================ -->
          <!--           FOOTER             -->
          <!-- ============================ -->
          <footer class="site-footer">
            <div class="container">
              <div class="footer-grid">
                <div class="footer-about">
                  <h4>Ghar Ghar Me TEA</h4>
                  <p>
                    Bringing authentic and aromatic chai experiences to every
                    home. Freshly sourced, expertly blended.
                  </p>
                </div>
                <div class="footer-links">
                  <h4>Quick Links</h4>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                  </ul>
                </div>
                <div class="footer-social">
                  <h4>Follow Us</h4>
                  <div class="social-icons">
                    <a href="#" aria-label="Facebook"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a href="#" aria-label="Instagram"
                      ><i class="fab fa-instagram"></i
                    ></a>
                    <a href="#" aria-label="Twitter"
                      ><i class="fab fa-twitter"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="footer-bottom">
                <p>&copy; 2024 Ghar Ghar Me TEA. All Rights Reserved.</p>
              </div>
            </div>
          </footer>
        </body>
      </html>`;
  },
});
export default layout;
