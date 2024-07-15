class SwiftNetFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <footer id="footer">
      <div class="container text-center footer-div">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12">
            <h3 class="footer-h3">Quick Links</h3>
            <ul class="footer-ul">
              <li><a href="">Internet</a></li>
              <li><a href="">Networking</a></li>
              <li><a href="">Cybersecurity</a></li>
              <li><a href="">Web Design</a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12">
            <h3 class="footer-h3">Customer Support </h3>
            <ul class="footer-ul">
              <li><a href="">Terms of Service</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us </a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-12 col-sm-12">
            <h3 class="footer-h3">Subscribe to our newsletter</h3>

          </div>
        </div>
        <hr>
      </div>
      <div class="footer-social">
        <div>
          <a class="footer-link" href="https://twitter.com/"><i class="bi bi-twitter footer-bi"></i></a>
          <a class="footer-link" href="https://www.facebook.com/"><i class="bi bi-facebook footer-bi"></i></a>
          <a class="footer-link" href="https://www.instagram.com/"><i class="bi bi-instagram footer-bi"></i></a>
          <a class="footer-link" href="mailto:theoidehen@gmail.com"><i class="bi bi-envelope-fill footer-bi"></i></a>
        </div>
        <div>
          <p class="c-24">© Copyright 2024 SwiftNet Solutions</p>
        </div>
      </div>
    </footer>
        `
    }
}

class HomeNav extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
      <div class="container">
        <a class="navbar-brand " href="index.html"><img class="brand-logo">
            <h4 class="brand-logo-h4">SwiftNet Solutions</h4>
            <p class="brand-logo-p">TECHNOLOGY PARTNER</p>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle nav-l" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul class="dropdown-menu home-nav-dropdown">
                <li><a class="dropdown-item products-dropdown" href="internet_product.html">internet</a></li>
                <li><a class="dropdown-item products-dropdown" href="networking.html">Networking</a></li>
                <li><a class="dropdown-item products-dropdown" href="cybersecurity.html">Cybersecurity</a></li>
                <li><a class="dropdown-item products-dropdown" href="#">Web Design</a></li>
              </ul>
            </li>
    
            <li class="nav-item">
              <a class="nav-link nav-l" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-l" href="contact_us.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        `
    }
}

class PlainNav extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light">
            <div class="container">
                <a class="navbar-brand " href="index.html"><img class="brand-logo">
                    <h4 class="brand-logo-h4">SwiftNet Solutions</h4>
                    <p class="brand-logo-p">TECHNOLOGY PARTNER</p>
                </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle internet-nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Products
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item products-dropdown2" href="internet_product.html">internet</a></li>
                      <li><a class="dropdown-item products-dropdown2" href="networking.html">Networking</a></li>
                      <li><a class="dropdown-item products-dropdown2" href="cybersecurity.html">Cybersecurity</a></li>
                      <li><a class="dropdown-item products-dropdown2" href="#">Web Design</a></li>
                    </ul>
                  </li>
          
                  <li class="nav-item">
                    <a class="nav-link internet-nav-link" href="#">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link internet-nav-link" href="contact_us.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        `
    }
}


customElements.define('swiftnet-footer', SwiftNetFooter)
customElements.define('home-nav', HomeNav)
customElements.define('plain-nav', PlainNav)
