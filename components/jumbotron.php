<?php
$carouselImages = isset($args['carouselImages']) ? $args['carouselImages'] : array();
?>

<div class="relative w-full pt-[56%]">
    <?php if (!empty($carouselImages)): ?>
        <div class='flex gap-2 absolute bottom-8 w-full justify-center z-10'>
            <?php foreach ($carouselImages as $idx => $carouselImage): ?>
                <span class="circle-indicator <?php echo $idx === 0 ? 'active' : ''; ?>" data-idx="<?php echo $idx; ?>"></span>
            <?php endforeach; ?>
        </div>
        <?php foreach ($carouselImages as $idx => $carouselImage): ?>
            <a href="<?php echo esc_url($carouselImage['link']); ?>">
                <img 
                    src="<?php echo esc_url($carouselImage['src']); ?>" 
                    class="lg:h-full w-full object-contain object-center jumbotron-image <?php echo $idx === 0 ? 'active' : ''; ?>" 
                    alt="Jumbotron Image"
                >
            </a>
        <?php endforeach; ?>
    <?php endif; ?>
</div>

<script>
    let imgIdx = 0;
    const images = document.querySelectorAll('.jumbotron-image');
    const indicators = document.querySelectorAll('.circle-indicator');

    const showImage = (index) => {
        images.forEach((img, idx) => {
            if (idx === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
        indicators.forEach((indicator, idx) => {
            if (idx === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    };

    indicators.forEach((indicator) => {
        indicator.addEventListener('click', (e) => {
            const clickedIdx = parseInt(e.target.getAttribute('data-idx'));
            imgIdx = clickedIdx;
            showImage(imgIdx);
            clearInterval(interval);
            interval = setInterval(nextImg, 5000);
        });
    });

    const nextImg = () => {
        imgIdx = (imgIdx + 1) % images.length;
        showImage(imgIdx);
    };

    interval = setInterval(nextImg, 5000);
</script>

<style>
.jumbotron-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s;
    object-fit: cover;
}

.jumbotron-image.active {
    opacity: 1;
    visibility: visible;
}

.circle-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #E5E7EB;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.circle-indicator.active {
    background-color: #3B82F6;
}

.circle-indicator:hover {
    background-color: #2563EB;
}

</style>