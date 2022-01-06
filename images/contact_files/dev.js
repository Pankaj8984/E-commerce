/**
	  |||||
	<(`0_0`)>
	()(afo)()
	  ()-()
**/

function getSocial(type, file, count, title) {
  $.ajax({
    method: "POST",
    data: {
      tm_option: "getSocial",
      type: type,
      file: file,
      count: count,
    },
  }).done(function (data) {
    $(".news_slider").slick("unslick");
    $("#home_social_news").html(data);

    $(".latest_title").html(title);
    $(".latest_title_mob").html(title + " <span></span>");
    $(".news_container > .filter2 > ul > li a").removeClass("active");
    $("." + type).addClass("active");

    $(".news_slider").slick({
      dots: !1,
      autoplay: !1,
      arrows: !0,
      prevArrow:
        '<span href="" data-role="none" class="slider_prev2">Previous</span>',
      nextArrow:
        '<span href="" data-role="none" class="slider_next2">Next</span>',
      infinite: !0,
      speed: 500,
      fade: !1,
      cssEase: "linear",
      pauseOnHover: !1,
      slide: "li",
      autoplaySpeed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
}

function getfilterbox(type) {
  $.ajax({
    method: "POST",
    data: {
      tm_option: "getfilterbox",
      type: type,
    },
  }).done(function (data) {
    $(".news_slider").slick("unslick");
    $("#home_social_news").html(data);
    $(".news_slider").slick({
      dots: !1,
      autoplay: !1,
      arrows: !0,
      prevArrow:
        '<span href="" data-role="none" class="slider_prev2">Previous</span>',
      nextArrow:
        '<span href="" data-role="none" class="slider_next2">Next</span>',
      infinite: !0,
      speed: 500,
      fade: !1,
      cssEase: "linear",
      pauseOnHover: !1,
      slide: "li",
      autoplaySpeed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
}

function ourWorldInit(type, title) {
  var loading = !1;
  var offset = 0;
  $("#our_world_type").val(type);
  $(".our_world_head_box ul").slideUp();
  $(".gray_bg").removeClass("ourworld-active");
  $(".world_block").removeClass("active");
  if (loading == !1) {
    loading = !0;
    $.ajax({
      method: "POST",
      data: {
        tm_option: "ourWorldLoadMore",
        offset: offset,
        type: type,
      },
      beforeSend: function (xhr) {},
    })
      .done(function (data) {
        if (data != 0) {
          $(".world_slider").slick("unslick");
          $("#ourworld_content").html(data);
          $("#our_world_title").html(title);

          $(".our_world_container > .filter > ul > li a").removeClass("active");
          $("." + type).addClass("active");

          $(".world_slider").slick({
            dots: !1,
            autoplay: !1,
            arrows: !0,
            prevArrow:
              '<span href="" data-role="none" class="slider_prev_world">Previous</span>',
            nextArrow:
              '<span href="" data-role="none" class="slider_next_world">Next</span>',
            infinite: !0,
            speed: 500,
            fade: !1,
            cssEase: "linear",
            pauseOnHover: !1,
            slide: "li",
            autoplaySpeed: 5000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1080,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 680,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          });
          $("#our_world_offset").val(parseInt(offset) + 3);
          loading = !1;
        } else {
          $("#ourworld_content").html("");
          loading = !0;
        }
      })
      .fail(function () {
        alert("Error!");
        loading = !1;
      });
  }
}

function peopleInit(type) {
  var loading = !1;
  var offset = 0;
  if (loading == !1) {
    loading = !0;
    $.ajax({
      data: {
        tm_option: "peopleLoadMore",
        offset: offset,
        type: type,
      },
      dataType: "json",
      beforeSend: function (xhr) {},
    })
      .done(function (res) {
        if (res.data != 0) {
          $(".readmore_block_" + type).show();
          $("#" + type + "_content").append(res.data);
          var cboxOptions9 = {
            iframe: !0,
            width: "80%",
            height: $(window).height() - parseInt(50) + "px",
            maxWidth: "692px",
            maxHeight: "400px",
            rel: !1,
            className: "box1",
          };
          $(".popupvideo").colorbox(cboxOptions9);
          var cboxOptions = {
            iframe: !1,
            width: "100%",
            height: "100%",
            className: "leadershippopup",
            scrolling: $(window).width() > 1024 ? !1 : !0,
            fixed: !0,
            onComplete: function () {
              $(".scroll2").mCustomScrollbar({
                scrollButtons: {
                  enable: !1,
                },
                theme: "minimal",
              });
            },
          };
          $(".leadership_pop").colorbox(cboxOptions);
          loading = !1;
        } else {
          $(".readmore_block_" + type).hide();
          $("#" + type + "_content").append(
            "<center>No more data to load.</center>"
          );
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block_" + type).hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function peopleLoadMore(e, type) {
  var loading = !1;

  var offset = 0;
  if (loading == !1) {
    loading = !0;
    offset = $("#" + type + "_offset").val();
    $.ajax({
      data: {
        tm_option: "peopleLoadMore",
        offset: offset,
        type: type,
      },
      dataType: "json",
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (res) {
        if (res.data != 0) {
          $(".readmore_block_" + type).show();
          $("#" + type + "_content").append(res.data);
          var cboxOptions9 = {
            iframe: !0,
            width: "80%",
            height: $(window).height() - parseInt(50) + "px",
            maxWidth: "692px",
            maxHeight: "400px",
            rel: !1,
            className: "box1",
          };
          $(".popupvideo").colorbox(cboxOptions9);
          var cboxOptions = {
            iframe: !1,
            width: "100%",
            height: "100%",
            className: "leadershippopup",
            scrolling: $(window).width() > 1024 ? !1 : !0,
            fixed: !0,
            onComplete: function () {
              $(".scroll2").mCustomScrollbar({
                scrollButtons: {
                  enable: !1,
                },
                theme: "minimal",
              });
            },
          };
          $(".leadership_pop").colorbox(cboxOptions);
          $("#" + type + "_offset").val(parseInt(offset) + 2);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $(".readmore_block_" + type).hide();
          $("#" + type + "_content").append(
            "<center>No more data to load.</center>"
          );
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block_" + type).hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function blogLoadMore(e) {
  var loading = !1;
  var offset = 0;
  if (loading == !1) {
    loading = !0;
    offset = $("#blog_offset").val();
    cat_id = $("#cat_id").val();
    $.ajax({
      data: {
        tm_option: "blogLoadMore",
        offset: offset,
        cat_id: cat_id,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(".readmore_block").show();
          $("#blog_content").append(data);
          $("#blog_offset").val(parseInt(offset) + 6);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $(".readmore_block").hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function productGalleryLoadMore(e) {
  var loading = !1;
  var offset = 0;
  var video_gallery_id = 0;
  if (loading == !1) {
    loading = !0;
    offset = $("#gallery_offset").val();
    video_gallery_id = $("#video_gallery_id").val();
    $.ajax({
      data: {
        tm_option: "productGalleryLoadMore",
        offset: offset,
        video_gallery_id: video_gallery_id,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(".readmore_block").show();
          $("#media_gallery_content").append(data);
          var cboxOptions2 = {
            iframe: !1,
            width: "100%",
            height: "100%",
            className: "join_popup",
            scrolling: $(window).width() > 1024 ? !1 : !0,
            fixed: !0,
          };
          $(".colorboxImg").colorbox({
            rel: "colorboxImg",
          });
          $(".colorboxImg").colorbox(cboxOptions2);
          $("#gallery_offset").val(parseInt(offset) + 3);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $(".readmore_block").hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function blogSearchLoadMoreInit() {
  var loading = !1;
  var offset = 0;
  var s;
  var showing_of = 0;
  var cats = new Array();
  $.each($("input[name='search_cat[]']:checked"), function () {
    cats.push($(this).val());
  });
  if (loading == !1) {
    loading = !0;
    s = $("#search").val();
    $.ajax({
      data: {
        tm_option: "blogSearchLoadMore",
        offset: offset,
        s: s,
        cats: cats,
      },
      dataType: "json",
      beforeSend: function (xhr) {},
    })
      .done(function (res) {
        if (res.data != 0) {
          $(".readmore_block").show();
          $("#blog_content").html(res.data);
          $("#blog_offset").val(parseInt(offset) + 6);
          if (res.post_count < 6 && res.total < 6) {
            showing_of = res.post_count;
          } else if (parseInt($("#blog_offset").val()) > res.total) {
            showing_of = res.total;
          } else {
            showing_of = $("#blog_offset").val();
          }
          if (s == "") {
            $(".bloginner_head").html(
              "Showing 1 - " + showing_of + " of " + res.total + " results"
            );
          } else {
            $(".bloginner_head").html(
              "Showing 1 - " +
                showing_of +
                " of " +
                res.total +
                " results for <span>" +
                s +
                "</span>"
            );
          }
          loading = !1;
        } else {
          $("#blog_content").html("<center>No data found</center>");
          $(".readmore_block").hide();
          $(".search_result").hide();
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function blogSearchLoadMore(e) {
  var loading = !1;
  var offset = 0;
  var s;
  var showing_of = 0;
  var cats = new Array();
  $.each($("input[name='search_cat[]']:checked"), function () {
    cats.push($(this).val());
  });
  if (loading == !1) {
    loading = !0;
    offset = $("#blog_offset").val();
    s = $("#search").val();
    $.ajax({
      data: {
        tm_option: "blogSearchLoadMore",
        offset: offset,
        s: s,
        cats: cats,
      },
      dataType: "json",
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (res) {
        if (res.data != 0) {
          $(".readmore_block").show();
          $("#blog_content").append(res.data);
          $("#blog_offset").val(parseInt(offset) + 6);
          if (res.post_count < 6 && res.total < 6) {
            showing_of = res.post_count;
          } else if (parseInt($("#blog_offset").val()) > res.total) {
            showing_of = res.total;
          } else {
            showing_of = $("#blog_offset").val();
          }
          if (s == "") {
            $(".bloginner_head").html(
              "Showing 1 - " + showing_of + " of " + res.total + " results"
            );
          } else {
            $(".bloginner_head").html(
              "Showing 1 - " +
                showing_of +
                " of " +
                res.total +
                " results for <span>" +
                s +
                "</span>"
            );
          }
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $(".readmore_block").hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function searchInit() {
  var loading = !1;
  var offset = 0;
  var s;
  var showing_of = 0;
  var cats = new Array();
  $.each($("input[name='search_filter[]']:checked"), function () {
    cats.push($(this).val());
  });
  if (loading == !1) {
    loading = !0;
    s = $("#search").val();
    $.ajax({
      data: {
        tm_option: "searchInit",
        offset: offset,
        s: s,
        cats: cats,
      },
      dataType: "json",
      beforeSend: function (xhr) {},
    })
      .done(function (res) {
        if (res.data != 0) {
          $(".readmore_block").show();
          $("#search_content").html(res.data);
          $("#search_offset").val(parseInt(offset) + 10);
          if (res.post_count < 10 && res.total < 10) {
            showing_of = res.post_count;
          } else if (parseInt($("#search_offset").val()) > res.total) {
            showing_of = res.total;
          } else {
            showing_of = $("#search_offset").val();
          }
          if (s == "") {
            $(".bloginner_head").html(
              "Showing 1 - " + showing_of + " of " + res.total + " results"
            );
          } else {
            $(".bloginner_head").html(
              "Showing 1 - " +
                showing_of +
                " of " +
                res.total +
                " results for <span>" +
                s +
                "</span>"
            );
          }
          var cboxOptions = {
            inline: !0,
            width: "100%",
            height: "100%",
            className: "join_popup",
          };
          var cboxOptions2 = {
            iframe: !1,
            width: "100%",
            height: "100%",
            className: "join_popup",
            scrolling: $(window).width() > 1024 ? !1 : !0,
            fixed: !0,
          };
          $(".colorboxImg").colorbox({
            rel: "colorboxImg",
          });
          $(".colorboxImg").colorbox(cboxOptions2);
          $(".joinblog_pop").colorbox(cboxOptions);
          loading = !1;
        } else {
          $("#search_content").html(
            '<li><div class="left_block"><center>No records found</center></div></li>'
          );
          $(".readmore_block").hide();
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function searchLoadMore(e) {
  var loading = !1;
  var offset = 0;
  var s;
  var showing_of = 0;
  var cats = new Array();
  $.each($("input[name='search_filter[]']:checked"), function () {
    cats.push($(this).val());
  });
  if (loading == !1) {
    loading = !0;
    offset = $("#search_offset").val();
    s = $("#search").val();
    $.ajax({
      data: {
        tm_option: "searchInit",
        offset: offset,
        s: s,
        cats: cats,
      },
      dataType: "json",
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (res) {
        if (res.data != 0) {
          $(".readmore_block").show();
          $("#search_content").append(res.data);
          $("#search_offset").val(parseInt(offset) + 10);
          if (res.post_count < 10 && res.total < 10) {
            showing_of = res.post_count;
          } else if (parseInt($("#search_offset").val()) > res.total) {
            showing_of = res.total;
          } else {
            showing_of = $("#search_offset").val();
          }
          if (s == "") {
            $(".bloginner_head").html(
              "Showing 1 - " + showing_of + " of " + res.total + " results"
            );
          } else {
            $(".bloginner_head").html(
              "Showing 1 - " +
                showing_of +
                " of " +
                res.total +
                " results for <span>" +
                s +
                "</span>"
            );
          }
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          var cboxOptions = {
            inline: !0,
            width: "100%",
            height: "100%",
            className: "join_popup",
          };
          var cboxOptions2 = {
            iframe: !1,
            width: "100%",
            height: "100%",
            className: "join_popup",
            scrolling: $(window).width() > 1024 ? !1 : !0,
            fixed: !0,
          };
          $(".colorboxImg").colorbox({
            rel: "colorboxImg",
          });
          $(".colorboxImg").colorbox(cboxOptions2);
          $(".joinblog_pop").colorbox(cboxOptions);
          loading = !1;
        } else {
          $(".readmore_block").hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function PressReleaseSelector(t, e) {
  $(".presdrop_box ul").slideToggle();
  $(".world_block").toggleClass("active");
  $(".gray_bg").toggleClass("ourworld-active");
  $("#our_world_title").html($(t).text() + "<span></span>");
  if (e == "press") {
    $("#press").show();
    $("#jlr").hide();
    $("#all").hide();
  } else if (e == "jlr") {
    $("#press").hide();
    $("#all").hide();
    $("#jlr").show();
  } else if (e == "all") {
    $("#press").hide();
    $("#all").show();
    $("#jlr").hide();
  }
}

function submitSearch() {
  document.search.submit();
}

function dealerLocatorCityDD(state_id) {
  $.ajax({
    data: { tm_option: "dealerLocatorCityDD", state_id: state_id },
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {},
  })
    .done(function (res) {
      if (res.status === "success") {
        $("#y_city").html(res.data);
        $("#y_di_city").html(res.data);
      } else {
        alert("Error");
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function emi_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {},
  })
    .done(function (res) {
      if (res.status === "success") {
        $("#calculated_emi").html(res.emi);
      } else if (res.status === "input_error") {
        alert(res.msg);
      } else {
        alert("Error");
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

// IEPF
function iepf_search_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {},
  })
    .done(function (res) {
      if (res.status === "success") {
        $("#iepf_name").html(res.msg.iepf_name);
        $("#iepf_folio_no").html(res.msg.iepf_folio_no);
        $("#iepf_date").html(res.msg.iepf_date);
        $("#iepf_amount").html(res.msg.iepf_amount);

        $("#iepf_search").hide();
        $("#iepf_result").show();
      } else {
        $("#iepf_name").html("");
        $("#iepf_folio_no").html("");
        $("#iepf_date").html("");
        $("#iepf_amount").html("");

        alert(res.msg);
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}
function iepf_search_form_reset() {
  $("#iepf_search").show();

  // reset data
  $("#iepf_name").html("");
  $("#iepf_folio_no").html("");
  $("#iepf_date").html("");
  $("#iepf_amount").html("");

  // reset form
  $('input[name="iepf_folio_no"]').val("");

  $("#iepf_result").hide();
}

// UCD
function ucd_search_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {},
  })
    .done(function (res) {
      if (res.status === "success") {
        $("#ucd_name").html(res.msg.ucd_name);
        $("#ucd_folio_no").html(res.msg.ucd_folio_no);
        $("#ucd_date").html(res.msg.ucd_date);
        $("#ucd_amount").html(res.msg.ucd_amount);

        $("#ucd_search").hide();
        $("#ucd_result").show();
      } else {
        $("#ucd_name").html("");
        $("#ucd_folio_no").html("");
        $("#ucd_date").html("");
        $("#ucd_amount").html("");

        alert(res.msg);
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}
function ucd_search_form_reset() {
  $("#ucd_search").show();

  // reset data
  $("#ucd_name").html("");
  $("#ucd_folio_no").html("");
  $("#ucd_date").html("");
  $("#ucd_amount").html("");

  // reset form
  $('input[name="ucd_folio_no"]').val("");

  $("#ucd_result").hide();
}

// SLT IEPF
function slt_iepf_search_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {},
  })
    .done(function (res) {
      if (res.status === "success") {
        $("#slt_iepf_name").html(res.msg.slt_iepf_name);
        $("#slt_iepf_folio_no").html(res.msg.slt_iepf_folio_no);
        $("#slt_iepf_date").html(res.msg.slt_iepf_date);
        $("#slt_iepf_amount").html(res.msg.slt_iepf_amount);

        $("#slt_iepf_search").hide();
        $("#slt_iepf_result").show();
      } else {
        $("#slt_iepf_name").html("");
        $("#slt_iepf_folio_no").html("");
        $("#slt_iepf_date").html("");
        $("#slt_iepf_amount").html("");

        alert(res.msg);
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}
function slt_iepf_search_form_reset() {
  $("#slt_iepf_search").show();

  // reset data
  $("#slt_iepf_name").html("");
  $("#slt_iepf_folio_no").html("");
  $("#slt_iepf_date").html("");
  $("#slt_iepf_amount").html("");

  // reset form
  $('input[name="slt_iepf_folio_no"]').val("");

  $("#slt_iepf_result").hide();
}

function blog_sub_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {},
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        alert(res.msg);
        fnChangeCaptcha();
      } else if (res.status === "success") {
        $(".joinpopup_form_container").html(res.html);
      } else if (res.status === "resubscribed") {
        $(".joinpopup_form_container").html(res.html);
      } else if (res.status === "email exists") {
        $(".joinpopup_form_container").html(res.html);
      } else if (res.status === "inactive") {
        $(".joinpopup_form_container").html(res.html);
      } else if (res.status === "bounced") {
        $(".joinpopup_form_container").html(res.html);
      } else {
        alert("Error");
        fnChangeCaptcha();
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function press_sub_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_press_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_press_form").hide();
        alert(res.msg);
        fnChangeCaptcha();
      } else if (res.status === "success") {
        $(".joinpopup_form_container_sub").html(res.html);
      } else if (res.status === "email exists") {
        $(".joinpopup_form_container_sub").html(res.html);
      } else {
        $("#loading_press_form").hide();
        alert("Error");
        fnChangeCaptcha();
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function media_query_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_media_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_media_form").hide();
        alert(res.msg);
        fnChangeCaptchaV3("captcha_2", "captcha_ver_security_salt_2");
      } else if (res.status === "success") {
        $(".joinpopup_form_container_media").html(res.html);
      } else {
        $("#loading_media_form").hide();
        alert("Error");
        fnChangeCaptchaV3("captcha_2", "captcha_ver_security_salt_2");
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function defence_pwu_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_media_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_media_form").hide();
        alert(res.msg);
        fnChangeCaptcha();
      } else if (res.status === "success") {
        $(".joinpopup_form_container_media").html(res.html);
      } else {
        $("#loading_media_form").hide();
        alert("Error");
        fnChangeCaptcha();
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function defence_mp_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_media_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_media_form").hide();
        alert(res.msg);
        fnChangeCaptcha();
      } else if (res.status === "success") {
        $(".joinpopup_form_container_media").html(res.html);
      } else {
        $("#loading_media_form").hide();
        alert("Error");
        fnChangeCaptcha();
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function inv_registration_day_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_inv_registration_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_inv_registration_form").hide();
        alert(res.msg);
        fnChangeCaptchaV3("captcha_2", "captcha_ver_security_salt_2");
      } else if (res.status === "success") {
        $(".inv_registration_day_form").html(res.html);
      } else {
        $("#loading_inv_registration_form").hide();
        alert("Error");
        fnChangeCaptchaV3("captcha_2", "captcha_ver_security_salt_2");
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function ana_registration_day_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_ana_registration_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_ana_registration_form").hide();
        alert(res.msg);
        fnChangeCaptchaV3("captcha_2", "captcha_ver_security_salt_2");
      } else if (res.status === "success") {
        $(".ana_registration_day_form").html(res.html);
      } else {
        $("#loading_ana_registration_form").hide();
        alert("Error");
        fnChangeCaptchaV3("captcha_2", "captcha_ver_security_salt_2");
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function new_dealer_registration_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_dealer_registration_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_dealer_registration_form").hide();
        alert(res.msg);
        fnChangeCaptchaV3("captcha_2", "captcha_ver_security_salt_2");
      } else if (res.status === "success") {
        $(".new_dealer_registration_form").html(res.html);
      } else {
        $("#loading_dealer_registration_form").hide();
        alert("Error");
        fnChangeCaptchaV3("captcha_2", "captcha_ver_security_salt_2");
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function contact_us_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_contact_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_contact_form").hide();
        alert(res.msg);
        fnChangeCaptcha();
      } else if (res.status === "success") {
        $(".joinpopup_form_container_contact").html(res.html);
      } else {
        $("#loading_contact_form").hide();
        alert("Error");
        fnChangeCaptcha();
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function ccf_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_ccf_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_ccf_form").hide();
        alert(res.msg);
        fnChangeCaptcha();
      } else if (res.status === "success") {
        $(".ccf_form_container_contact").html(res.html);
      } else {
        $("#loading_ccf_form").hide();
        alert("Error");
        fnChangeCaptcha();
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function pressLoadMore(e) {
  var loading = !1;
  var offset = 0;
  if (loading == !1) {
    loading = !0;
    offset = $("#media_offset").val();
    $.ajax({
      data: {
        tm_option: "pressLoadMore",
        offset: offset,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(e).hide();
          $("#press_view_all").show();
          $("#press_content").append(data);
          $("#media_offset").val(parseInt(offset) + 4);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $("#press_view_all").hide();
          $(e).hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $("#press_view_all").hide();
        $(e).hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function pressJlrLoadMore(e, type) {
  var loading = !1;
  var offset = 0;
  if (loading == !1) {
    loading = !0;
    offset = $("#media_offset").val();
    $.ajax({
      data: {
        tm_option: "pressJlrLoadMore",
        offset: offset,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(e).hide();
          $("#press_view_all").show();
          $("#press_content").append(data);
          $("#media_offset").val(parseInt(offset) + 4);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $("#press_view_all").hide();
          $(e).hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $("#press_view_all").hide();
        $(e).hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function JlrLoadMore(e, type) {
  var loading = !1;
  var offset = 0;
  if (loading == !1) {
    loading = !0;
    offset = $("#media_offset_2").val();
    $.ajax({
      data: {
        tm_option: "JlrLoadMore",
        offset: offset,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(e).hide();
          $("#jlr_view_all").show();
          $("#jlr_content").append(data);
          $("#media_offset_2").val(parseInt(offset) + 4);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $("#jlr_view_all").hide();
          $(e).hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $("#jlr_view_all").hide();
        $(e).hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function AllLoadMore(e, type) {
  var loading = !1;
  var offset = 0;
  if (loading == !1) {
    loading = !0;
    offset = $("#media_offset_3").val();
    $.ajax({
      data: {
        tm_option: "AllLoadMore",
        offset: offset,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(e).hide();
          $("#all_view_all").show();
          $("#all_content").append(data);
          $("#media_offset_3").val(parseInt(offset) + 4);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $("#all_view_all").hide();
          $(e).hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $("#all_view_all").hide();
        $(e).hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function storyLoadMore(e) {
  var loading = !1;
  var offset = 0;
  var from_date = "";
  var to_date = "";
  if (loading == !1) {
    loading = !0;
    offset = $("#story_offset").val();
    from_date = $("#from_date").val();
    to_date = $("#to_date").val();
    $.ajax({
      data: {
        tm_option: "storyLoadMore",
        offset: offset,
        from_date: from_date,
        to_date: to_date,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(".readmore_block").show();
          $("#story_content").append(data);
          $(".youtube").colorbox({
            iframe: !0,
            innerWidth: 600,
            innerHeight: 420,
          });
          var cboxOptions = {
            iframe: !0,
            width: "95%",
            height: "420px",
            maxWidth: "600px",
            maxHeight: "420px",
          };
          $(".youtube").colorbox(cboxOptions);
          $("#story_offset").val(parseInt(offset) + 6);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $(".readmore_block").hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function pressLoadMoreV2(e) {
  var loading = !1;
  var offset = 0;
  var from_date = "";
  var to_date = "";
  var press_tag = "";
  if (loading == !1) {
    loading = !0;
    offset = $("#press_offset").val();
    from_date = $("#from_date").val();
    to_date = $("#to_date").val();
    press_tag = $("#press_tag").val();
    $.ajax({
      data: {
        tm_option: "pressLoadMoreV2",
        offset: offset,
        from_date: from_date,
        to_date: to_date,
        press_tag: press_tag,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(".readmore_block").show();
          $("#press_content").append(data);
          $("#press_offset").val(parseInt(offset) + 6);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          var cboxOptions = {
            inline: !0,
            width: "100%",
            height: "100%",
            className: "join_popup",
            onLoad: function () {
              fnChangeCaptcha();
            },
          };
          $(".joinblog_pop").colorbox(cboxOptions);
          $(".subsblog_pop").colorbox(cboxOptions);
          loading = !1;
        } else {
          $(".readmore_block").hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function (xhr, status, error) {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function jlrLoadMoreV2(e) {
  var loading = !1;
  var offset = 0;
  var from_date = "";
  var to_date = "";
  if (loading == !1) {
    loading = !0;
    offset = $("#press_offset").val();
    from_date = $("#from_date").val();
    to_date = $("#to_date").val();
    $.ajax({
      data: {
        tm_option: "jlrLoadMoreV2",
        offset: offset,
        from_date: from_date,
        to_date: to_date,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(".readmore_block").show();
          $("#press_content").append(data);
          $("#press_offset").val(parseInt(offset) + 6);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          var cboxOptions = {
            inline: !0,
            width: "100%",
            height: "100%",
            className: "join_popup",
            onLoad: function () {
              fnChangeCaptcha();
            },
          };
          $(".joinblog_pop").colorbox(cboxOptions);
          $(".subsblog_pop").colorbox(cboxOptions);
          loading = !1;
        } else {
          $(".readmore_block").hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function mediaCoverageLoadMore(e) {
  var loading = !1;
  var offset = 0;
  var from_date = "";
  var to_date = "";
  if (loading == !1) {
    loading = !0;
    offset = $("#media_coverage_offset").val();
    from_date = $("#from_date").val();
    to_date = $("#to_date").val();
    $.ajax({
      data: {
        tm_option: "mediaCoverageLoadMore",
        offset: offset,
        from_date: from_date,
        to_date: to_date,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $(".readmore_block").show();
          $("#media_coverage_content").append(data);
          $("#media_coverage_offset").val(parseInt(offset) + 6);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          $(".subsblog_pop").colorbox(cboxOptions);
          loading = !1;
        } else {
          $(".readmore_block").hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $(".readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function galleryLoadMore(e, loadhere, type) {
  var loading = !1;
  var offset = 0;
  var search_term = "";
  var per_page = 3;
  if (loading == !1) {
    loading = !0;
    offset = $("#" + loadhere + "_offset").val();
    search_term = $("#search_term").val();
    $.ajax({
      data: {
        tm_option: "galleryLoadMore",
        loadhere: loadhere,
        offset: offset,
        type: type,
        per_page: per_page,
        search_term: search_term,
      },
      beforeSend: function (xhr) {
        $(e).css({
          "pointer-events": "none",
          cursor: "default",
        });
      },
    })
      .done(function (data) {
        if (data != 0) {
          $("." + loadhere + "_readmore_block").show();
          $("#" + loadhere).append(data);
          $("#" + loadhere + "_offset").val(
            parseInt(offset) + parseInt(per_page)
          );
          var cboxOptions2 = {
            iframe: !1,
            width: "100%",
            height: "100%",
            className: "join_popup",
            scrolling: $(window).width() > 1024 ? !1 : !0,
            fixed: !0,
          };
          $(".colorboxImg").colorbox({
            rel: "colorboxImg",
          });
          $(".colorboxImg").colorbox(cboxOptions2);
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !1;
        } else {
          $("." + loadhere + "_readmore_block").hide();
          $(e).css({
            "pointer-events": "auto",
            cursor: "pointer",
          });
          loading = !0;
        }
      })
      .fail(function () {
        $("." + loadhere + "_readmore_block").hide();
        alert("Error!");
        loading = !1;
      });
  }
}

function set_email_value_in_popup() {
  $("#sub_email").val($("#sub_email_first").val());
}

function set_email_value_in_popup_press(e) {
  $("#s_email").val($(e).prev("input").val());
}

function fnChangeCaptcha() {
  $.ajax({
    method: "POST",
    data: {
      tm_option: "fnChangeCaptcha",
    },
  }).done(function (data) {
    document.getElementById("captcha").src =
      "/wp-content/themes/tatamotors_2018/cool-php-captcha-0.3/captcha.php?code=" +
      data +
      "&q=" +
      Math.random();
    $("#captcha_ver_security_salt").val(data);
  });
}

function fnChangeCaptchaV2() {
  $.ajax({
    method: "POST",
    data: {
      tm_option: "fnChangeCaptcha",
    },
  }).done(function (data) {
    document.getElementById("captcha").src =
      "/wp-content/themes/tatamotors_2018/cool-php-captcha-0.3/captcha-v2.php?code=" +
      data +
      "&q=" +
      Math.random();
    $("#captcha_ver_security_salt").val(data);
  });
}

function fnChangeCaptchaV3(img_id, salt_id) {
  $.ajax({
    method: "POST",
    data: {
      tm_option: "fnChangeCaptcha",
    },
  }).done(function (data) {
    document.getElementById(img_id).src =
      "/wp-content/themes/tatamotors_2018/cool-php-captcha-0.3/captcha.php?code=" +
      data +
      "&q=" +
      Math.random();
    $("#" + salt_id).val(data);
  });
}
$(function (e) {
  $(document).on("click", ".share_dev", function (event) {
    $(".open_share_dev").fadeIn();
    $(".share-overlay-dev").toggleClass("is-visible");
  });
  $(".share-overlay-dev, .open_share_dev li a, .open_share_dev").on(
    "click",
    function () {
      $(".open_share_dev").fadeOut();
      $(".share-overlay-dev").removeClass("is-visible");
    }
  );
});

function setShareLink(url) {
  $("#share_url").html(url);
}

function sharePopWindow(type) {
  if (type == "facebook") {
    var url =
      "http://www.facebook.com/sharer/sharer.php?u=" + $("#share_url").html();
    openwindow(url);
  } else if (type == "twitter") {
    var url =
      "http://twitter.com/intent/tweet?status=" + $("#share_url").html();
    openwindow(url);
  } else if (type == "linkedin") {
    var url =
      "http://www.linkedin.com/shareArticle?mini=true&url=" +
      $("#share_url").html();
    openwindow(url);
  } else if (type == "google") {
    var url = "https://plus.google.com/share?url=" + $("#share_url").html();
    openwindow(url);
  } else {
    alert("Out of options!");
  }
}

function openwindow(url) {
  window.open(
    url,
    "mywindow",
    "location=1,status=1,scrollbars=1,width=800,height=600"
  );
}

function toggleProductTabs(evt, open_div, close_div, tab_class) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(close_div);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName(tab_class);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(open_div).style.display = "block";
  evt.currentTarget.className += " active";
}

function distributorship_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_distributorship_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_distributorship_form").hide();
        alert(res.msg);
        fnChangeCaptchaV3("captcha_3", "captcha_ver_security_salt_3");
      } else if (res.status === "success") {
        $(".joinpopup_form_container_distributorship").html(res.html);
      } else {
        $("#loading_distributorship_form").hide();
        alert("Error");
        fnChangeCaptchaV3("captcha_3", "captcha_ver_security_salt_3");
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

function list_your_country_form_submit(e) {
  var f_data = $(e).serialize();
  $.ajax({
    data: f_data,
    type: "POST",
    dataType: "json",
    beforeSend: function (xhr) {
      $("#loading_list_your_country_form").show();
    },
  })
    .done(function (res) {
      if (res.status === "captcha_error") {
        $("#loading_list_your_country_form").hide();
        alert(res.msg);
        fnChangeCaptchaV3("captcha_4", "captcha_ver_security_salt_4");
      } else if (res.status === "success") {
        $(".joinpopup_form_container_list_your_country").html(res.html);
      } else {
        $("#loading_list_your_country_form").hide();
        alert("Error");
        ffnChangeCaptchaV3("captcha_4", "captcha_ver_security_salt_4");
      }
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}
$(function () {
  $.validator.methods.email = function (value, element) {
    return (
      this.optional(element) ||
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/.test(value)
    );
  };
  $("#distributorshipForm").validate({
    rules: {
      txtName: {
        required: !0,
      },
      txtPhone: {
        required: !0,
      },
      txtCountry: {
        required: !0,
      },
      orgName: {
        required: !0,
      },
      txtWebsite: {
        required: !0,
      },
      txtModels: {
        required: !0,
      },
      txtEmail: {
        required: !0,
      },
      captcha_ver_code: {
        required: !0,
      },
    },
    messages: {
      txtName: {
        required: "Enter your Name",
      },
      txtPhone: {
        required: "Enter phone no",
      },
      txtCountry: {
        required: "Please select country",
      },
      orgName: {
        required: "Please enter organization name",
      },
      txtWebsite: {
        required: "Please enter website",
      },
      txtModels: {
        required: "Please enter model of interest",
      },
      txtEmail: {
        required: "Enter your Email Address",
        email: "Enter a valid Email Address",
      },
      captcha_ver_code: {
        required: "Enter captcha text as it shown",
      },
    },
    submitHandler: function (form) {
      distributorship_form_submit(form);
    },
  });
  $("#listYourCountryForm").validate({
    rules: {
      txtName: {
        required: !0,
      },
      txtAddress: {
        required: !0,
      },
      txtCity: {
        required: !0,
      },
      txtPhone: {
        required: !0,
      },
      txtResPhone: {
        required: !0,
      },
      txtEmail: {
        required: !0,
      },
      txtPin: {
        required: !0,
      },
      txtQuery: {
        required: !0,
      },
      captcha_ver_code: {
        required: !0,
      },
    },
    messages: {
      txtName: {
        required: "Enter your Name",
      },
      txtAddress: {
        required: "Enter your Address",
      },
      txtCity: {
        required: "Enter your City",
      },
      txtPhone: {
        required: "Enter your Phone no (Off)",
      },
      txtResPhone: {
        required: "Enter your Phono no (Res)",
      },
      txtPin: {
        required: "Enter PIN / Postal / Zip code",
      },
      txtQuery: {
        required: "Enter your Query",
      },
      txtEmail: {
        required: "Enter your Email Address",
        email: "Enter a valid Email Address",
      },
      captcha_ver_code: {
        required: "Enter captcha text as it shown",
      },
    },
    submitHandler: function (form) {
      list_your_country_form_submit(form);
    },
  });
});
$("#changeCaptcha_3, #changeCaptcha_4").click(function () {
  fnChangeCaptchaV3("captcha_3", "captcha_ver_security_salt_3");
  fnChangeCaptchaV3("captcha_4", "captcha_ver_security_salt_4");
});
$(function () {
  var cboxOptionsmr = {
    inline: !0,
    width: "100%",
    height: "100%",
    className: "join_popup",
    onLoad: function () {
      fnChangeCaptchaV3("captcha_3", "captcha_ver_security_salt_3");
      fnChangeCaptchaV3("captcha_4", "captcha_ver_security_salt_4");
    },
  };
  $(".marketmenu_pop").colorbox(cboxOptionsmr);
  $(window).resize(function () {
    $.colorbox.resize({
      width:
        window.innerWidth > parseInt(cboxOptionsmr.maxWidth)
          ? cboxOptionsmr.maxWidth
          : cboxOptionsmr.width,
      width:
        window.innerWidth > parseInt(cboxOptionsmr.maxWidth)
          ? cboxOptionsmr.maxWidth
          : cboxOptionsmr.width,
    });
  });
  $(document)
    .bind("cbox_open", function () {
      $("body,html").addClass("noScrollSimple");
    })
    .bind("cbox_cleanup", function () {
      $("body,html").removeClass("noScrollSimple");
    });
});

$(function () {
  var cboxOptions = {
    inline: true,
    width: "100%",
    height: "100%",
    className: "join_popup",
    //maxWidth: '950px',
    // maxHeight: 600,
  };

  $(".partner_pop").colorbox(cboxOptions);

  $(window).resize(function () {
    $.colorbox.resize({
      width:
        window.innerWidth > parseInt(cboxOptions.maxWidth)
          ? cboxOptions.maxWidth
          : cboxOptions.width,
      width:
        window.innerWidth > parseInt(cboxOptions2.maxWidth)
          ? cboxOptions2.maxWidth
          : cboxOptions2.width,
    });
  });

  $(document)
    .bind("cbox_open", function () {
      $("body,html").addClass("noScrollSimple");
    })
    .bind("cbox_cleanup", function () {
      $("body,html").removeClass("noScrollSimple");
    });
});

$(function () {
  $("#EmiCalculatorForm").validate({
    rules: {
      loan_amount: { required: true },
      rate_of_interest: { required: true },
      loan_period: { required: true },
    },
    messages: {
      loan_amount: { required: "Enter loan amount" },
      rate_of_interest: { required: "Enter rate of interest" },
      loan_period: { required: "Select loan tenure" },
    },
    submitHandler: function (form) {
      emi_form_submit(form);
    },
  });
});

function resetDD(selected, ddv) {
  if (selected == "search_ff") {
    jQuery("#search_event_cat").val("");
    jQuery("#search_result_kit_cat").val("");
  } else if (selected == "search_event_cat") {
    if (ddv == "AFF" || ddv == "AR" || ddv == "RPR") {
      jQuery("#search_ff").val(ddv);
      //jQuery('#search_event_cat').val('');
    } else {
      jQuery("#search_ff").val("");
    }
    jQuery("#search_result_kit_cat").val("");
  } else if (selected == "search_result_kit_cat") {
    jQuery("#search_ff").val("");
    jQuery("#search_event_cat").val("");
  }
}

function setRKDD(year) {
  $.ajax({
    data: {
      tm_option: "setRKDD",
      year: year,
    },
    type: "POST",
    dataType: "text",
    beforeSend: function (xhr) {
      // loading
    },
  })
    .done(function (res) {
      $("#search_result_kit_cat").empty().append(res);
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}
function setInvResDD(year) {
  $.ajax({
    data: {
      tm_option: "setInvResDD",
      year: year,
    },
    type: "POST",
    dataType: "text",
    beforeSend: function (xhr) {
      // loading
    },
  })
    .done(function (res) {
      $("#search_event_cat").empty().append(res);
    })
    .fail(function () {
      alert("Error! Failed to connect server");
    });
  return !1;
}

/*$(window).scroll(function(){
	if($(window).width()>1024){
	
	// Add parallax scrolling to all images in .paralax-image container
	$('.parallax-image').each(function(){
		
		// only put top value if the window scroll has gone beyond the top of the image
		if ($(this).offset().top < $(window).scrollTop()) {
			// Get ammount of pixels the image is above the top of the window
			var difference = $(window).scrollTop() - $(this).offset().top;
			// Top value of image is set to half the amount scrolled
			// (this gives the illusion of the image scrolling slower than the rest of the page)
			var half = (difference / 2 ) + 'px';

			//$(this).find('.scrolling_parallax, iframe').css('top', half);
			$(this).find('.scrolling_parallax').css('top', half);
			
		} else {
			// if image is below the top of the window set top to 0
			//$(this).find('.scrolling_parallax, iframe').css('top', '0');
			$(this).find('.scrolling_parallax').css('top', '0');
		}
	});
	
//	$(window).bind('scroll', function(){
//  var homeTop = $(window).scrollTop();
//
//  $(".opacity_scroll, .opacity_scroll2").each(function() {
//	$(this).addClass("demo");  
//    var height = $(this).height();
//    var offset = $(this).offset().top;
//    var opacity = (height - homeTop + offset) / height;
//
//    $(this).css("opacity", opacity);
//  });
//});
	}
});

$(function(){
$('.counter').counterUp({
delay: 50,
time: 5000
});	  
})*/
