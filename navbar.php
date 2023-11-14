<!-- Header Content -->
<div class="py-3 px-8 flex items-center bg-zinc-900 justify-between relative sticky top-0 z-50">
    <!-- Logo or Site Title -->
    <a class="flex items-center" href="<?php echo home_url(); ?>">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/logo.svg" alt="Logo" width="48" height="48">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/logo_word.svg" alt="Logo Word" width="108" height="48">
    </a>

    <?php
        $links = array(
        array('name' => '講義專區', 'link' => home_url('/tag/handouts')),
        array('name' => '電商專區', 'link' => home_url('/tag/eshop')),
        array('name' => '預購專區', 'link' => home_url('/courses/chef-ricky')),
        array('name' => '購物車', 'link' => home_url('/cart')),
        array('name' => '我的帳號', 'link' => home_url('/dashboard'))
        );
        $courseLinks = array(
            array('name' => '土壤力學', 'link' => home_url('/courses/soil-mechanics/')),
            array('name' => '基礎工程', 'link' => home_url('/courses/foundation-engineering/')),
            array('name' => 'RC鋼筋混凝土', 'link' => home_url('courses/rc%e9%8b%bc%e7%ad%8b%e6%b7%b7%e5%87%9d%e5%9c%9f/')),
            array('name' => '西班牙料理', 'link' => home_url('/courses/chef-ricky/'))
        );
    ?>
    

    <!-- Navigation Links -->
    <nav class="hidden md:flex items-center">
        <!-- course submenu -->
        <div class="ml-4 relative group">
            <a href="#" class="text-white hover:text-gray-300 cursor-pointer" onclick="toggleDesktopSubmenu(event)">精選課程</a>
            <div id="desktopSubmenu" class="z-20 absolute left-0 mt-4 w-28 bg-zinc-800 text-white hidden shadow-lg rounded">
                <?php foreach ($courseLinks as $course) : ?>
                <a href="<?php echo $course['link']; ?>" class="text-center block px-4 py-2 hover:bg-blue-100 hover:text-blue-400">
                    <?php echo $course['name']; ?>
                </a>
                <?php endforeach; ?>
            </div>
        </div>
        <?php foreach ($links as $link) : ?>
        <a href="<?php echo $link['link']; ?>" class="ml-4 text-white hover:text-gray-300">
            <?php echo $link['name']; ?>
        </a>
        <?php endforeach; ?>
    </nav>

    <!-- Mobile Menu Button -->
    <button class="md:hidden flex items-center p-2 text-white" onclick="toggleSidemenu()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    </button>

    <!-- Side Menu -->
    <div id="sidemenu" class="md:hidden fixed top-0 left-0 w-64 h-full bg-zinc-900 overflow-y-auto transition-transform transform translate-x-[-100%] z-10 py-20">
        <ul>
            <!-- course submenu -->
            <li class="border-b border-zinc-800">
                <a href="#" class="block px-4 py-2 text-white hover:bg-zinc-800" onclick="toggleSubmenu(event)">精選課程</a>
                <ul id="submenu" class="pl-4 hidden">
                    <?php foreach ($courseLinks as $course) : ?>
                    <li><a href="<?php echo $course['link']; ?>" class="block px-4 py-2 text-white hover:bg-blue-100 hover:text-blue-400">
                        <?php echo $course['name']; ?>
                    </a></li>
                    <?php endforeach; ?>
                </ul>
            </li>
            <?php foreach ($links as $link) : ?>
                <li class="border-b border-zinc-800">
                <a href="<?php echo $link['link']; ?>" class="block px-4 py-2 text-white hover:bg-zinc-800">
                    <?php echo $link['name']; ?>
                </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>

    <script>
        function toggleSidemenu() {
            var sidemenu = document.getElementById('sidemenu');
            if (sidemenu.style.transform === "translateX(0px)") {
                sidemenu.style.transform = "translateX(-100%)";
            } else {
                sidemenu.style.transform = "translateX(0px)";
            }
        }
        function toggleSubmenu(event) {
            event.preventDefault();
            var submenu = document.getElementById('submenu');
            if (submenu.classList.contains('hidden')) {
                submenu.classList.remove('hidden');
            } else {
                submenu.classList.add('hidden');
            }
        }
        function toggleDesktopSubmenu(event) {
            event.preventDefault();
            var desktopSubmenu = document.getElementById('desktopSubmenu');
            if (desktopSubmenu.classList.contains('hidden')) {
                desktopSubmenu.classList.remove('hidden');
            } else {
                desktopSubmenu.classList.add('hidden');
            }
        }
    </script>
</div>