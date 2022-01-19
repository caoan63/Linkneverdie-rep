"use strict"

window.addEventListener("load", function() {
    const search_btn = document.querySelector(".navbar__button");
    const search_close = document.querySelector(".search-close");
    const top_search = document.getElementById("top-search");
    
    search_close.addEventListener("click", function() {
        top_search.classList.remove("open");
    })
    
    
    search_btn.addEventListener("click", function() {
        const navbar_list = document.querySelectorAll(".navbar__list .item");
        if(top_search.classList.contains("open"))
        {
            for(var index of navbar_list)
                index.classList.remove("hidden");
            top_search.classList.remove("open");
        }
        else
        {
            top_search.classList.add("open");
            for(var index of navbar_list)
                index.classList.add("hidden");
        }
    })

    var tag_list = this.document.querySelectorAll("#games-tab .item-tag-link");
    var Film_tag_list = this.document.querySelectorAll("#films-tab .item-tag-link");
    addSwitchPage(tag_list);
    addSwitchPage(Film_tag_list);  
    
    var viewAmountID = document.getElementById("total-view");
    var onlineAmountID = document.getElementById("total-online");
    setDynamicNumber(viewAmountID);
    setDynamicNumber(onlineAmountID);
})

function addSwitchPage(tabID) {
    for(var key of tabID)
    {
        key.addEventListener("click", function() {
            var targetID = this.getAttribute("href").slice(2);
            var currentTagActive = document.querySelector(".item-tag-link.active");
            var currentItemActive = document.querySelector(".item-show.active");
            currentTagActive.classList.remove("active");
            currentItemActive.classList.remove("active");
            console.log(this.dataset.role);
            // Add active to this Tab
            var targetEle = document.getElementById(targetID);
            this.classList.add("active");
            targetEle.classList.add("active");
        });
    }
}

function setDynamicNumber(targetID) {
    var value = Number.parseInt(targetID.innerHTML);
    setInterval(function() {
        var rate = Math.random();
        if(rate < 0.7)
            targetID.innerHTML = value + (Math.floor(Math.random()*10));
        else
            targetID.innerHTML = value - (Math.floor(Math.random()*10));
    }, 500);
}

