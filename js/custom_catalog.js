function catalogActive () {
    let $list = document.getElementById('catalog-list')
    if ($list) {
      // 鼠标滚轮滚动
      $list.addEventListener('mousewheel', function (e) {
        // 计算鼠标滚轮滚动的距离
        $list.scrollLeft -= e.wheelDelta / 2
        // 阻止浏览器默认方法
        e.preventDefault()
      }, false)
  
      // 高亮当前页面对应的分类或标签
      let $catalog = document.getElementById(decodeURIComponent(window.location.pathname))
      $catalog.classList.add('selected')
  
      // 滚动当前页面对应的分类或标签到中部
      $list.scrollLeft = ($catalog.offsetLeft - $list.offsetLeft) - ($list.offsetWidth - $catalog.offsetWidth) / 2
    }
  }
  catalogActive()

// function catalogActive(e){let t=document.getElementById("catalog-list");if(t){t.addEventListener("mousewheel",(function(e){t.scrollLeft-=e.wheelDelta/2,e.preventDefault()}),!1);let a=window.location.pathname;a=decodeURIComponent(a),("tags"==e?/\/tags\/.*?\//:/\/categories\/.*?\//).test(a)&&document.getElementById(e+"-"+a.split("/")[2]).classList.add("selected")}}catalogActive("tags"),catalogActive("categories");