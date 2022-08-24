/*
 * Yiven
 * 
 * jQuery ScrollPagination
 * 2020/02/17
 */

(function($){
    var defaults = {
        'url': null, // The url you are fetching the results.
        'autoload': true, // Change this to false if you want to load manually, default true.
        'data': {
            // These are the variables you can pass to the request, for example: which page you are
            'page': 1, // Which page at the firsttime
            'size': 10, // Number of pages
        }, 
        'before': function(){
            // Before load function, you can display a preloader div
            $(this.loading).fadeIn();
        },
        'after': function(elementsLoaded){
            // After loading content, you can use this function to animate your new elements
            $(this.loading).fadeOut();
            $(elementsLoaded).fadeInWithDelay();
        }, 
        'scroller': $(window), // Who gonna scroll? default is the full window
        'heightOffset': 20, // It gonna request when scroll is 10 pixels before the page ends
        'loading': '#loading', // ID of loading prompt.
        'loadingText': 'Wait a moment... it\'s loading!', // Text of loading prompt.
        'loadingNomoreText': 'No more.', // No more of loading prompt.
        'manuallyText': 'click to loading more.',
    };

    $.fn.scrollPagination = function(options) {
        var opts = $.extend(defaults, options);
        var target = opts.scroller;
        return this.each(function() {
            $.fn.scrollPagination.init($(this), opts);
        });
    };

    $.fn.stopScrollPagination = function(obj=null, opts=null){
        if(obj == null){
            return this.each(function() {
                $(this).attr('scrollPagination', 'disabled');
            });
        }else{
            $(opts.loading).text(opts.loadingNomoreText).fadeIn();
            $(obj).attr('scrollPagination', 'disabled');
        }
    };

    $.fn.scrollPagination.loadContent = function(obj, opts){
        
        var target = opts.scroller;
        // do before
        if (opts.before != null){
            opts.before();
        }
        $(obj).children().attr('rel', 'loaded');
        $.ajax({
            type: 'POST',
            //crossDomain: true,
            url: opts.url,
            data: opts.data,
            // dataType: 'jsonp',
            dataType: 'json',
            cors: true ,
            contentType:'application/json',
            secure: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
              },
            success: function(data){
                var html = "";
                if(data.content != null){
                    $(opts.loading).text(opts.loadingText);
                    // console.log("threaindtext",opts.manuallyText)
                    if(opts.manuallyText == "threading"){
                        $.each(data.content,function(index, value){
                            html += '<li class="infinite-item list-group-item selected">'
                            html += '<div class="d-flex align-items-center">'
                            html += ' <div class="round">'
                            html += '<input type="checkbox" id="checkbox1'+index+'" name="choices"/>'
                            html += ' <label for="checkbox1'+index+'"></label>'
                            html += '</div>'
                            html += ' <div class="image-parent">'
                            html += ' <img src="./image/plceholder-profile-pic.png" class="img-fluid" alt="profile1">'
                            html += ' </div>'
                            html += '<div class="d-inline-block overflow-auto">'
                            html += ' <span class="d-inline-block w-100 text-wrap"><b>'+value.name+'</b></span>'
                            html += ' <span class="d-inline-block w-100 text-wrap"><b>'+value.ticketName+'</b></span>'
                            html += '<span class="d-inline-block w-100 text-wrap"><b>'+value.status+'</b></span>'
                            html += ' </div>'
                            html += '</div>'
                            html += '</li>';
                            dataCount = parseInt(index) + 1;
                        });
                    } else {
                        $.each(data.content,function(index, value){
                            html += '<li class="infinite-item list-group-item selected">'
                            html += '<div class="d-flex align-items-center">'
                            html += ' <div class="round">'
                            html += '<input type="checkbox" id="checkbox1'+index+'" name="choices"/>'
                            html += ' <label for="checkbox1'+index+'"></label>'
                            html += '</div>'
                            html += ' <div class="image-parent">'
                            html += ' <img src="./image/plceholder-profile-pic.png" class="img-fluid" alt="profile1">'
                            html += ' </div>'
                            html += '<div class="d-inline-block overflow-auto">'
                            html += ' <span class="d-inline-block w-100 text-wrap">'+value.name+'</span>'
                            html += ' <span class="d-inline-block w-100 text-wrap"><b>'+value.ticketName+'</b></span>'
                            html += '<span class="d-inline-block w-100 text-wrap">'+value.status+'</span>'
                            html += ' </div>'
                            html += '</div>'
                            html += '</li>';
                            dataCount = parseInt(index) + 1;
                        });
                    }
                    
                    $(obj).append(html);

                    console.log("data"+JSON.stringify(opts.data),"dataCount::"+dataCount,"size::"+opts.data.size,"index::"+data.content)

                    if(dataCount < opts.data.size){
                        opts.data.page++;
                    }else{
                        $.fn.stopScrollPagination(obj, opts);
                    }
                }
                var objectsRendered = $(obj).children('[rel!=loaded]');
                // do after
                if (opts.after != null){
                    opts.after(objectsRendered);
                }
            }
        });
    };

    $.fn.scrollPagination.init = function(obj, opts){
        var target = opts.scroller;
        $(obj).attr('scrollPagination', 'enabled');
        if($(obj).children().length === 0){
            $.fn.scrollPagination.loadContent(obj, opts);
        }
        if(opts.autoload === true){
            $(target).scroll(function(event){
                if($(obj).attr('scrollPagination') == 'enabled'){
                    var mayLoadContent = (Math.ceil($(target).scrollTop()) + opts.heightOffset) >= ($(document).height() - $(target).height());
                    if(mayLoadContent){
                        $.fn.scrollPagination.loadContent(obj, opts);
                    }
                }else{
                    event.stopPropagation(obj, opts);
                }
            });
            // $.fn.scrollPagination.loadContent(obj, opts);
        }else{
            opts.loadingText = opts.manuallyText;
            $(opts.loading).text(opts.loadingText).fadeIn().on('click', function(event){
                if($(obj).attr('scrollPagination') == 'enabled'){
                    $.fn.scrollPagination.loadContent(obj, opts);
                }else{
                    event.stopPropagation(obj, opts);
                }
            });
            // $.fn.scrollPagination.loadContent(obj, opts);
        }
    };
    
    // code for fade in element by element
    $.fn.fadeInWithDelay = function(){
        var delay = 0;
        return this.each(function(){
            $(this).delay(delay).animate({opacity:1}, 200);
            delay += 100;
        });
    };
})(jQuery);