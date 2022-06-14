<footer class="footer">
    <div class="footer-container">
        <img class="footer-logo" src="/pronaikon-logo.svg" alt="">
        <div class="footer-container-info">
            <span class="footer-container-info-content">Ilirska 76</span>
            <span class="footer-container-info-content">31 000 Osijek</span>
            <span class="footer-container-info-content">OIB: 11308288216</span>
            <span class="footer-container-info-content">MB: 05593603</span>
        </div>
        <div class="footer-container-links">
            <a href="mailto:maloca.luka@gmail.com" class="footer-container-links-link">
                <img class="footer-container-links-link-icon" src="/mail.svg" alt="mail">
                maloca.luka@gmail.com
            </a>

            <a href="tel:0989373133" class="footer-container-links-link">
                <img class="footer-container-links-link-icon" src="/phone.svg" alt="phone">
                098 937 3133
            </a>
        </div>
    </div>
        <!--<img class="footer-boards" src="/boards.jpeg" alt="">-->
</footer>

<style>
    .footer {
        position: relative;
        overflow: hidden;
        padding: 100px 0 50px;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
    }

    .footer-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
    }

    .footer-container-info {
        display: flex;
        flex-wrap: wrap;
        margin-top: 12px;
    }

    .footer-container-info-content {
        padding: 10px 24px;
    }

    .footer-container-links {

    }

    .footer-container-links-link {
        display: inline-flex;
        align-items: center;
        color: white;
        text-decoration: none;
        padding: 12px;
        user-select: none;
        transition: .25s;
    }

    .footer-container-links-link:hover {
        color: #C5A365;
    }

    .footer-container-links-link-icon {
        margin-right: 8px;
    }

    .footer-logo {
        height: 175px;
    }

    .footer-boards {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50%;
    }
</style>