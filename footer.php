<footer class="p-4">
    <div class="flex gap-4 justify-center">
        <?php 
        $socialIcons = array(
            array('name' => 'instagram', 'link' => 'https://www.instagram.com/yourknowledgelimited/'),
            array('name' => 'facebook', 'link' => 'https://www.facebook.com/yourknowledge666'),
            array('name' => 'discord', 'link' => 'https://discord.gg/AekJ25vVjb'),
            array('name' => 'youtube', 'link' => 'https://www.youtube.com/@yourknowledge666')
        );
        foreach ($socialIcons as $social) : ?>
            <a href="<?php echo $social['link']; ?>">
                <?php 
                $svg_path = get_template_directory() . '/assets/icons/' . $social['name'] . '.svg';
                echo file_get_contents($svg_path);
                ?>
            </a>
        <?php endforeach; ?>
    </div>
    <div class="text-center mt-2">
        <p class="text-sm" style="color: gray!important;">© 2023 by 你的知識有限公司 Yourknowledge</p>
    </div>
    <div class="text-center mt-2">
        <p class="text-sm" style="color: gray!important;">你的知識有限，來這學習無限</p>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
