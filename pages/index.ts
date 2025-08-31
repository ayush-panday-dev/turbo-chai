import { generateTDHPages } from "turbo-dynamic-html";

const page = generateTDHPages({
  render(data: { chaibg: string }) {
    return `<!-- ============================================= -->
<!--        CSS-ONLY HERO SLIDER SECTION           -->
<!-- ============================================= -->
<section class="hero-slider-css">
    <!-- Hidden Radio Buttons to Control State -->
    <input type="radio" name="slider-css" id="slide-css-1" checked>
    <input type="radio" name="slider-css" id="slide-css-2">
    <input type="radio" name="slider-css" id="slide-css-3">

    <!-- The Slides -->
    <div class="slider-wrapper">
        <!-- Slide 1 -->
        <div class="slide" style="background-image: url('${data.chaibg}');">
            <div class="slide-content">
                <h2>Authentic Masala Chai</h2>
                <p>Experience the traditional, aromatic blend of spices and premium tea leaves.</p>
                <a href="#" class="btn">Shop The Blend</a>
            </div>
        </div>

        <!-- Slide 2 -->
        <div class="slide" style="background-image: url('https://images.pexels.com/photos/1493080/pexels-photo-1493080.jpeg');">
            <div class="slide-content">
                <h2>Soothing Green Tea</h2>
                <p>Discover our refreshing collection of pure and infused green teas.</p>
                <a href="#" class="btn">Explore Now</a>
            </div>
        </div>

        <!-- Slide 3 -->
        <div class="slide" style="background-image: url('https://images.unsplash.com/photo-1556742059-4f9502b4d1a1?q=80&w=2070&auto=format&fit=crop');">
            <div class="slide-content">
                <h2>Free Shipping On All Orders</h2>
                <p>Enjoy your favorite chai delivered to your doorstep, on us!</p>
                <a href="#" class="btn">Start Shopping</a>
            </div>
        </div>
    </div>

    <!-- Navigation Dots (using Labels) -->
    <div class="slider-dots">
        <label for="slide-css-1" class="dot"></label>
        <label for="slide-css-2" class="dot"></label>
        <label for="slide-css-3" class="dot"></label>
    </div>
</section>



<!-- ============================ -->
<!--      FEATURED PRODUCTS       -->
<!-- ============================ -->
<section class="featured-products">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Our Top Chai Picks</h2>
            <p class="section-subtitle">Handpicked blends loved by our customers.</p>
        </div>

        <div class="product-grid">
            <!-- Product Card 1 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://img.freepik.com/free-photo/tea-cinnamon_23-2147776687.jpg" alt="Classic Masala Chai">
                </div>
                <div class="product-info">
                    <h3 class="product-name">Classic Masala Chai</h3>
                    <p class="product-description">A robust blend of Assam tea and aromatic spices.</p>
                    <div class="product-price">
                        <span class="current-price">₹199</span>
                        <span class="original-price">₹249</span>
                    </div>
                    <button class="btn btn-add-to-cart">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>

            <!-- Product Card 2 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://img.freepik.com/free-photo/steaming-spiced-tea-pottery-bowls-with-cinnamon-sticks_23-2152002849.jpg" alt="Kashmiri Kahwa Green Tea">
                </div>
                <div class="product-info">
                    <h3 class="product-name">Kashmiri Kahwa</h3>
                    <p class="product-description">Green tea with saffron, almonds, and cardamom.</p>
                    <div class="product-price">
                        <span class="current-price">₹299</span>
                    </div>
                    <button class="btn btn-add-to-cart">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>

            <!-- Product Card 3 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://img.freepik.com/free-psd/traditional-indian-dessert_23-2150634503.jpg" alt="Spicy Ginger Chai">
                </div>
                <div class="product-info">
                    <h3 class="product-name">Spicy Ginger Chai</h3>
                    <p class="product-description">The perfect zesty and warming cup for any season.</p>
                    <div class="product-price">
                        <span class="current-price">₹179</span>
                    </div>
                    <button class="btn btn-add-to-cart">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>

            <!-- Product Card 4 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://img.freepik.com/premium-photo/close-up-indian-style-kullhad-masala-tea_1008404-162.jpg" alt="Calming Chamomile Blend">
                </div>
                <div class="product-info">
                    <h3 class="product-name">Calming Chamomile</h3>
                    <p class="product-description">A caffeine-free herbal infusion to help you unwind.</p>
                    <div class="product-price">
                        <span class="current-price">₹229</span>
                        <span class="original-price">₹279</span>
                    </div>
                    <button class="btn btn-add-to-cart">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>

            <!-- Product Card 5 -->
            <div class="product-card">
                <div class="product-image">
                    <img src="https://img.freepik.com/free-photo/cup-hot-cappuccino-with-cinnamon_140725-2284.jpg" alt="Royal Cardamom Chai">
                </div>
                <div class="product-info">
                    <h3 class="product-name">Royal Cardamom Chai</h3>
                    <p class="product-description">Rich, fragrant, and smooth with a touch of sweetness.</p>
                    <div class="product-price">
                        <span class="current-price">₹249</span>
                    </div>
                    <button class="btn btn-add-to-cart">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
`;
  },
});

export default page;
