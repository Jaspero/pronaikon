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
    <div class="footer-jaspero">
        <div class="footer-flex">
            Made by &nbsp;
            <a href="https://jaspero.co/" target="_blank" class="footer-jaspero-link">Jaspero</a>
        </div>
    </div>
</footer>

<style>
    @font-face {
        font-family: Gilroy;
        src: url(Gilroy.woff);
    }

    .footer {
        position: relative;
        overflow: hidden;
        padding: 50px 0;
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

    .footer-flex {
        display: flex;
        justify-content: center;
    }

    .footer-jaspero {
        font-size: 16px;
        font-family: 'Gilroy', sans-serif;
        margin-top: 30px;
    }

    .footer-jaspero-link {
        color: #e65100;
        text-decoration: none;
    }

    .footer-jaspero-link:hover {
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        .footer-logo {
            width: 100%;
            height: unset;
            padding: 0 20px;
        }
        .footer-container-links-link {
            padding: 12px 20px;
        }
    }
</style>