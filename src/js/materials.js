const $filterBtns = document.querySelectorAll(".js-filter-blog");
$filterBtns.forEach(($btn) => {
    $btn.addEventListener("click", () => {
        if ($btn.classList.contains("js-filter-blog-active")) {
            return;
        }

        const filterName = $btn.dataset.filterName;
        const $blogItems = document.querySelectorAll(".blog-item");
        $blogItems.forEach(($item) => {
            if (filterName === "all" || $item.classList.contains(`blog-item--${filterName}`)) {
                $item.classList.remove("blog-item--hide");
            } else {
                $item.classList.add("blog-item--hide");
            }
        });

        const $oldActiveBtn = document.querySelector(".js-filter-blog-active");
        $oldActiveBtn.classList.remove("js-filter-blog-active");

        $btn.classList.add("js-filter-blog-active");
    });
});
