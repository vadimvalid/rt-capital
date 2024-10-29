(window.webpackJsonp = window.webpackJsonp || []).push([
  ["capital_app_footer"],
  {
    UB33: function (t, e, a) {
      "use strict";
      a.r(e);
      a("QWBl"), a("07d7"), a("FZtP");
      var r = a("TaHA");
      var l = function () {
        new r.i(".js-promo-images", {
          modules: [r.a, r.b],
          loop: !0,
          autoplay: {
            delay: 6e3,
          },
          simulateTouch: !1,
          effect: "fade",
          speed: 1300,
          fadeEffect: {
            crossFade: !0,
          },
        }),
          new r.i(".js-promo-text", {
            modules: [r.b, r.a, r.c],
            effect: "fade",
            loop: !0,
            parallax: !0,
            simulateTouch: !1,
            slideVisibleClass: "is-animate",
            autoplay: {
              delay: 7e3,
            },
            speed: 1500,
            fadeEffect: {
              crossFade: !0,
            },
            lazy: {
              loadOnTransitionStart: !0,
            },
            on: {
              beforeInit: function () {
                document
                  .querySelectorAll(".js-promo-text .swiper-slide")
                  .forEach(function (t) {
                    var e = 1;
                    t
                      .querySelectorAll(".js-animate-elem")
                      .forEach(function (t) {
                        (t.style.transitionDelay = e + "s"), (e += 0.3);
                      }),
                      t
                        .querySelector(".js-delay-calc")
                        .style.setProperty("--left-side-delay", e + "s");
                  });
              },
              slideChangeTransitionEnd: function () {},
            },
          });
      };
      var i = function () {
        var t,
          e,
          a,
          l = new r.i(".js-deals", {
            modules: [r.g, r.f, r.d],
            watchSlidesProgress: !0,
            slideVisibleClass: "js-deals-visible",
            scrollbar: {
              el: ".js-deals-scrollbar",
              draggable: !0,
            },
            breakpoints: {
              320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.85,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1240: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            },
          });
        (t = l),
          (e = document.querySelectorAll(".js-deals-type-filter")),
          (a = document.querySelectorAll(".js-deals-type-card")),
          e.forEach(function (r) {
            r.addEventListener("click", function () {
              var r = this.dataset.assetType;
              !(function (t) {
                t.forEach(function (t) {
                  t.classList.remove("active");
                });
              })(e),
                this.classList.add("active"),
                (function (t, e) {
                  t.forEach(function (t) {
                    e !== t.dataset.assetType
                      ? t.remove()
                      : document
                          .querySelector(".js-deals-carousel-wrapper")
                          .append(t);
                  });
                })(a, r),
                t.update();
            });
          });
      };
      var s = function () {
          new r.i(".js-news-carousel", {
            modules: [r.f, r.a, r.c],
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: ".js-news-pagination",
              type: "bullets",
              clickable: !0,
            },
            autoplay: {
              delay: 4e3,
            },
            loop: !0,
            speed: 500,
            lazy: {
              loadOnTransitionStart: !0,
              loadPrevNext: !0,
            },
          });
        },
        n = a("y1Xq"),
        o = a.n(n);
      var c = function () {
        new o.a({
          select: ".js-gallery-year",
          showSearch: !1,
        });
      };
      function d() {
        var t = this.closest(".js-body");
        t.classList.remove("overflow"),
          t.querySelector(".js-menu").classList.remove("open");
      }
      a("R5XZ");
      var u = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500;
          (t.style.transitionProperty = "height, margin, padding"),
            (t.style.transitionDuration = e + "ms"),
            (t.style.boxSizing = "border-box"),
            (t.style.height = t.offsetHeight + "px"),
            t.offsetHeight,
            (t.style.overflow = "hidden"),
            (t.style.height = 0),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0),
            (t.style.marginTop = 0),
            (t.style.marginBottom = 0),
            window.setTimeout(function () {
              (t.style.display = "none"),
                t.style.removeProperty("height"),
                t.style.removeProperty("padding-top"),
                t.style.removeProperty("padding-bottom"),
                t.style.removeProperty("margin-top"),
                t.style.removeProperty("margin-bottom"),
                t.style.removeProperty("overflow"),
                t.style.removeProperty("transition-duration"),
                t.style.removeProperty("transition-property");
            }, e);
        },
        p = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 500;
          t.style.removeProperty("display");
          var a = window.getComputedStyle(t).display;
          "none" === a && (a = "block"), (t.style.display = a);
          var r = t.offsetHeight;
          (t.style.overflow = "hidden"),
            (t.style.height = 0),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0),
            (t.style.marginTop = 0),
            (t.style.marginBottom = 0),
            t.offsetHeight,
            (t.style.boxSizing = "border-box"),
            (t.style.transitionProperty = "height, margin, padding"),
            (t.style.transitionDuration = e + "ms"),
            (t.style.height = r + "px"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            window.setTimeout(function () {
              t.style.removeProperty("height"),
                t.style.removeProperty("overflow"),
                t.style.removeProperty("transition-duration"),
                t.style.removeProperty("transition-property");
            }, e);
        };
      var f = function () {
        document.querySelectorAll(".js-menu-dropdown").forEach(function (t) {
          t.addEventListener("click", function (t) {
            t.preventDefault(),
              this.parentNode.parentNode.classList.toggle("active"),
              (function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 500;
                "none" === window.getComputedStyle(t).display
                  ? p(t, e)
                  : u(t, e);
              })(this.parentNode.parentNode.querySelector(".js-menu-list"));
          });
        });
      };
      var m = function () {
          var t = document.querySelector(".js-search-button"),
            e = document.querySelector(".js-search-close");
          t.addEventListener("click", function () {
            this.closest(".js-body")
              .querySelector(".js-search-container")
              .classList.add("open");
          }),
            e.addEventListener("click", function () {
              this.closest(".js-body")
                .querySelector(".js-search-container")
                .classList.remove("open");
            });
        },
        v = a("SwAO"),
        _ = a.n(v);
      var b = function () {
        _.a.run(".js-gallery-popup", {
          noScrollbars: !0,
        });
      };
      var h = function () {
        new r.i(".js-gallery-swiper", {
          modules: [r.g],
          slidesPerView: 3,
          spaceBetween: 30,
          scrollbar: {
            el: ".js-gallery-scrollbar",
          },
          breakpoints: {
            0: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.25,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });
      };
      var g = function () {
        new r.i(".js-news-gallery", {
          modules: [r.e],
          loop: !0,
          centeredSlides: !0,
          navigation: {
            nextEl: ".js-news-gallery-next",
            prevEl: ".js-news-gallery-prev",
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.19,
            },
          },
        });
      };
      a("ma9I"),
        a("+2oP"),
        a("yXV3"),
        a("oVuX"),
        a("rB9j"),
        a("EnZy"),
        a("uqXc");
      var y = function () {
          var t = "Дополнительно",
            e = "Обычная версия",
            a = {
              title: "Цветовая схема",
              class: "color",
              buttons: ["Б", "Ч", "Г", "Ж", "З"],
            },
            r = {
              title: "Кернинг",
              class: "kern",
              buttons: ["Стандартный", "Средний", "Большой"],
            },
            l = {
              title: "Интервал",
              class: "intr",
              buttons: ["Одинарный", "Полуторный", "Двойной"],
            },
            i = {
              title: "Гарнитура",
              class: "garn",
              buttons: ["Без засечек", "С засечками"],
            };
          function s(t) {
            for (var e = "", a = 0; a < t.buttons.length; a++) {
              var r = "";
              switch (t.class) {
                case "size":
                case "color":
                  r = " rt-spec_btn-".concat(t.class, "-").concat(a + 1);
              }
              e += '<button class="rt-spec_btn'
                .concat(r, '"\n                            data-attr="')
                .concat(t.class, "-")
                .concat(
                  a + 1,
                  '">\n                            <span>\n                                '
                )
                .concat(
                  t.buttons[a],
                  "\n                            </span>\n                        </button>"
                );
            }
            return '<div class="rt-spec_'
              .concat(
                t.class,
                's">\n                    <div class="rt-spec_title">'
              )
              .concat(
                t.title,
                '</div>\n                    <div class="rt-spec_btns">\n                        '
              )
              .concat(
                e,
                "\n                    </div>\n                </div>"
              );
          }
          var n =
              '<div class="rt-spec js-special">\n        <div class="rt-spec_panelWrap js-specPanel">\n            <div class="rt-spec_panel">\n                '
                .concat(
                  s({
                    title: "Размер шрифта",
                    class: "size",
                    buttons: ["A", "A", "A"],
                  }),
                  "\n                "
                )
                .concat(
                  s(a),
                  '\n                <div class="rt-spec_btns">\n                    <button class="rt-spec_btn rt-spec_btnMore js-openMore">\n                        <span>\n                            '
                )
                .concat(
                  t,
                  '\n                        </span>\n                    </button>\n                    <button class="rt-spec_btn js-closeSpec">\n                        <span>\n                            '
                )
                .concat(
                  e,
                  '\n                        </span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class="rt-spec_moreWrap js-moreOptions">\n            <div class="rt-spec_more">\n                '
                )
                .concat(s(r), "\n                ")
                .concat(s(l), "\n                ")
                .concat(
                  s(i),
                  "\n            </div>\n        </div>\n    </div>"
                ),
            o = [],
            c = function (t) {
              var e = $(
                "[data-attr^=".concat(t.slice(0, 4), "].is-active")
              ).data("attr");
              $("html").removeClass(e).addClass(t),
                $(".js-special").css(
                  "height",
                  $(".js-specPanel").outerHeight()
                );
              var a = o.indexOf(e);
              (o[a] = t),
                localStorage.setItem("special", o.join(" ")),
                $(document).trigger("storageEvent"),
                $(
                  "[data-attr='".concat(e, "'], [data-attr='").concat(t, "']")
                ).toggleClass("is-active");
            },
            d = function () {
              localStorage.removeItem("special");
              for (var t = 0; t < o.length; t++) $("html").removeClass(o[t]);
              $(".js-special button").off("click", p),
                $(".js-special").remove(),
                $(document).trigger("myEventSpecial", "removeSpecial");
            },
            u = function () {
              null !== localStorage.getItem("special")
                ? (o = localStorage.getItem("special").split(" "))
                : ((o = [
                    "special",
                    "color-1",
                    "size-1",
                    "kern-1",
                    "intr-1",
                    "garn-1",
                  ]),
                  localStorage.setItem("special", o.join(" ")),
                  $(document).trigger("storageEvent")),
                $(n).prependTo("body");
              for (var t = 0; t < o.length; t++)
                $(".js-special [data-attr=".concat(o[t], "]")).addClass(
                  "is-active"
                );
              $("html").addClass(o.join(" ")),
                $(".js-special").css(
                  "height",
                  $(".js-specPanel").outerHeight()
                ),
                $(".js-special button").on("click", p),
                $(document).trigger("myEventSpecial", "addSpecial"),
                $(".rt-header-main");
            },
            p = function (t) {
              $(t.currentTarget).hasClass("js-openMore")
                ? ($(".js-moreOptions").toggleClass("is-show"),
                  $(".js-openMore").toggleClass("is-active"))
                : $(t.currentTarget).hasClass("js-closeSpec")
                ? d()
                : $(t.currentTarget).hasClass("is-active") ||
                  c($(t.currentTarget).data("attr"));
            };
          $(document).on("myEventSize", function (t, e) {
            if ("phone" === e) {
              for (var a = 2; a < o.length; a++)
                -1 === o[a].lastIndexOf("1") &&
                  c("".concat(o[a].slice(0, 4), "-1"));
              $(".js-moreOptions.is-show").removeClass("is-show"),
                $(".js-openMore.is-active").removeClass("is-active");
            }
          }),
            null !== localStorage.getItem("special") && u(),
            document
              .querySelector(".js-blind-version")
              .addEventListener("click", function () {
                $(".js-special").length > 0 ? d() : u();
              });
        },
        C = a("9a8T"),
        w = a.n(C);
      var j = function () {
        w.a.init({
          once: !0,
          offset: 10,
          duration: 1e3,
          delay: 500,
        });
      };
      a("pjDv"), a("PKPk");
      var S = function () {
        var t = Array.from(document.querySelectorAll(".js-map-object"));
        setInterval(function () {
          var e,
            a,
            r,
            l =
              ((a = (e = t).length - 1),
              (r = Math.floor(Math.random() * (a + 1))),
              e[r]);
          l.classList.add("active"),
            setTimeout(function () {
              l.classList.remove("active");
            }, 2500);
        }, 3e3),
          t.forEach(function (t) {
            t.addEventListener("mouseover", function () {
              t.classList.add("hovered"),
                t.closest(".js-map-container").classList.add("hover");
            }),
              t.addEventListener("mouseleave", function () {
                t.classList.remove("hovered"),
                  t.closest(".js-map-container").classList.remove("hover");
              });
          });
      };
      var O = function () {
        document.querySelectorAll(".js-map-object").forEach(function (t) {
          t.querySelector(".js-map-popup").addEventListener(
            "click",
            function () {
              var t = this.id,
                e = document.querySelector("[data-card=".concat(t, "]")),
                a = e.querySelector(".js-close-card");
              e.classList.add("active"),
                a.addEventListener("click", function () {
                  e.classList.remove("active");
                });
            }
          );
        });
      };
      var k = function () {
        w.a.init({
          offset: 20,
          once: !0,
          disable: "mobile",
        });
      };
      var P = function () {
        new r.i(".js-deals-banner", {
          modules: [r.f],
          pagination: {
            el: ".js-deals-pagination",
            type: "bullets",
            clickable: !0,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          },
        });
      };
      var x = function () {
        document.querySelectorAll(".js-rent-select").forEach(function (t) {
          var e = t.dataset.placeholder;
          new o.a({
            select: t,
            showSearch: !1,
            placeholder: e,
          });
        });
      };
      a("4mDm"),
        a("3bBZ"),
        a("mGGf"),
        a("hByQ"),
        a("DQNa"),
        a("JfAA"),
        a("qePV");
      var D = function () {
          var t = document.getElementById("filter-form"),
            e = t.dataset.blockId;
          function a(t) {
            var e = t.getFullYear(),
              a =
                t.getMonth() + 1 >= 10
                  ? t.getMonth() + 1
                  : "0".concat(t.getMonth() + 1),
              r = t.getDate() >= 10 ? t.getDate() : "0".concat(t.getDate());
            return "".concat(e, "-").concat(a, "-").concat(r);
          }
          t.addEventListener("submit", function (t) {
            t.preventDefault();
            var r = new URLSearchParams(window.location.search),
              l = document.getElementById("month").value,
              i = document.getElementById("year").value,
              s = document.getElementById("title").value;
            if ((s && r.set("search_".concat(e), s), l || i)) {
              var n = (function (t, e) {
                  var r,
                    l,
                    i = t || new Date().getFullYear(),
                    s = e || 1;
                  e
                    ? ((r = a(new Date(i, Number(s) - 1, 1))),
                      (l = a(new Date(i, s, 0))))
                    : ((r = a(new Date(i, Number(s) - 1, 1))),
                      (l = a(new Date(i, 12, 0))));
                  return {
                    firstDay: r,
                    lastDay: l,
                  };
                })(i, l),
                o = n.firstDay,
                c = n.lastDay;
              r.set("date_from", o), r.set("date_to", c);
            }
            r.toString() && (window.location.search = r);
          });
        },
        L = a("DRYN");
      var q = function () {
          var t = document.querySelector(".js-input-phone");
          Object(L.a)(t, {
            mask: "+{7} (000) 000-00-00",
          });
        },
        F = a("U4ld");
      var I = function () {
        var t = new F.a("#callback", {
          errorFieldCssClass: "is-invalid",
          lockForm: !1,
        });
        t.addField(".js-input-name", [
          {
            rule: "required",
            errorMessage: "Заполните обязательное поле",
          },
        ])
          .addField(".js-input-phone", [
            {
              rule: "required",
              errorMessage: "Заполните обязательное поле",
            },
          ])
          .onSuccess(function () {
            t.form.submit();
          });
      };
      var A = function () {
        new r.i(".js-cards-swiper", {
          modules: [r.f, r.a],
          slidesPerView: 1,
          centeredSlides: !0,
          spaceBetween: 20,
          pagination: {
            el: ".js-cards-pagination",
            type: "bullets",
            clickable: !0,
            bulletClass: "rt-history-cards_bullet",
            bulletActiveClass: "rt-history-cards_bullet-active",
          },
          autoplay: {
            delay: 3e3,
          },
          loop: !0,
        });
      };
      var E = function () {
        document
          .querySelector(".js-main-categories-btn")
          .addEventListener("click", function () {
            this.closest(".js-main-categories").classList.toggle("active");
          });
      };
      var V = function () {
        document
          .querySelector(".js-subscribe-button")
          .addEventListener("click", function () {
            var t = [];
            document
              .querySelectorAll("[data-mailing-id]")
              .forEach(function (e) {
                e.checked && t.push(e.getAttribute("data-mailing-id"));
              });
            var e = {
              ids: t,
              exclude: [],
              email: document.querySelector('[data-mailing-field="email"]')
                .value,
              fullname: document.querySelector('[data-mailing-field="name"]')
                .value,
            };
            $.ajax({
              url: "/_ajax/mailing/subscribe",
              method: "POST",
              data: e,
              success: function (t) {
                if (t.result) {
                  var e = t.result;
                  "Данные успешно сохранены." === e
                    ? (e = "Спасибо! Вы успешно подписаны на новости компании.")
                    : "Данные не были сохранены." === e &&
                      (e =
                        "К сожалению не удалось подписаться на новости компании."),
                    (document.querySelector(
                      ".js-subscribe-result"
                    ).textContent = e),
                    (document.querySelector(
                      ".js-subscribe-result"
                    ).style.display = "block"),
                    (document.getElementById("subscribe-form").style.display =
                      "none");
                }
              },
            });
          });
      };
      a("Rm1S");
      function M(t, e) {
        t && e
          ? document
              .querySelector(".js-subscribe-button")
              .classList.remove("disabled")
          : document
              .querySelector(".js-subscribe-button")
              .classList.add("disabled");
      }
      var B = function () {
        var t = document.querySelector(".js-subscriber-name"),
          e = document.querySelector(".js-subscriber-email"),
          a = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          r = !1,
          l = !1;
        t.addEventListener("input", function (e) {
          e.target.value.length >= 3
            ? ((r = !0), t.classList.remove("error"))
            : ((r = !1), t.classList.add("error")),
            M(r, l);
        }),
          e.addEventListener("input", function (t) {
            t.target.value.match(a)
              ? ((l = !0), e.classList.remove("error"))
              : ((l = !1), e.classList.add("error")),
              M(r, l);
          });
      };
      var R = function () {
          new o.a({
            select: ".js-application-direction select",
            showSearch: !1,
            placeholder: "Выберите из списка",
          });
        },
        T =
          (a("UxlC"),
          a("brp2"),
          a("eoL8"),
          a("tkto"),
          a("pNMO"),
          a("TeQF"),
          a("5DmW"),
          a("27RR"),
          a("HRxU"),
          a("XF1A")),
        N = a.n(T);
      function U(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function H(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? U(Object(a), !0).forEach(function (e) {
                z(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : U(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function z(t, e, a) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var Z = 0;
      var X = function () {
        var t = document.querySelector(".js-experience-button");
        t.addEventListener("click", function () {
          var e = String(
              Date.now().toString(32) + Math.random().toString(16)
            ).replace(/\./g, ""),
            a = (function (t) {
              var e = 0 === Z ? " first" : "";
              return (
                (Z += 1),
                '\n    <div class="rt-application-form_experienceContent js-form-exp-item'
                  .concat(e, '" id="')
                  .concat(
                    t,
                    '">\n      <div class="rt-application-form_experienceRow">\n        <div class="rt-application-form_experienceItem">\n          <label class="rt-application-form_label required">Организация</label>\n          <input type="text" class="rt-application-form_field" placeholder="Укажите название организации" id="base_form__question_experience-organisation-'
                  )
                  .concat(
                    t,
                    '">\n        </div>\n        <div class="rt-application-form_experienceItem">\n          <label class="rt-application-form_label required">Должность</label>\n          <input type="text" class="rt-application-form_field" placeholder="Укажите должность" id="base_form__question_experience-position-'
                  )
                  .concat(
                    t,
                    '">\n        </div>\n        <div class="rt-application-form_experienceItem js-experience-dates">\n          <label class="rt-application-form_label required">Период работы</label>\n          <div class="rt-application-form_experienceDate">\n            <div class="rt-application-form_experienceItem">\n              <input type="text" class="rt-application-form_field date js-experience-start-'
                  )
                  .concat(
                    t,
                    '" placeholder="с" id="base_form__question_experience-start-'
                  )
                  .concat(
                    t,
                    '">\n            </div>\n            <div class="rt-application-form_experienceItem">\n              <input type="text" class="rt-application-form_field date js-experience-end-'
                  )
                  .concat(
                    t,
                    '" placeholder="до" id="base_form__question_experience-end-'
                  )
                  .concat(
                    t,
                    '">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="rt-application-form_experienceRow">\n        <div class="rt-application-form_experienceItem">\n          <label class="rt-application-form_label required">Выполняемые функции/обязанности/задачи</label>\n          <textarea placeholder="Перечислите ваши обязанности" class="rt-application-form_field" id="base_form__question_experience-responsibility-'
                  )
                  .concat(
                    t,
                    '"></textarea>\n        </div>\n        <div class="rt-application-form_experienceItem">\n          <label class="rt-application-form_label required">Достижения/результаты</label>\n          <textarea placeholder="Перечислите полученные результаты" class="rt-application-form_field" id="base_form__question_experience-achievement-'
                  )
                  .concat(
                    t,
                    '"></textarea>\n        </div>\n      </div>\n    </div>\n  '
                  )
              );
            })(e);
          t.insertAdjacentHTML("beforebegin", a),
            (function (t, e, a) {
              var r = {
                  startDay: 1,
                  formatter: function (t, e, a) {
                    var r = e.toLocaleDateString("ru-RU");
                    t.value = r;
                  },
                  customMonths: [
                    "Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь",
                  ],
                  customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                  overlayPlaceholder: "Год",
                  overlayButton: "Применить",
                  showAllDates: !0,
                },
                l = N()(
                  t,
                  H(
                    H({}, r),
                    {},
                    {
                      id: a,
                    }
                  )
                ),
                i = N()(
                  e,
                  H(
                    H({}, r),
                    {},
                    {
                      id: a,
                      position: "br",
                    }
                  )
                );
              l.getRange(), i.getRange();
            })(
              document.querySelector(".js-experience-start-".concat(e)),
              document.querySelector(".js-experience-end-".concat(e)),
              e
            );
        }),
          t.click();
      };
      a("2B1R"),
        a("T63A"),
        a("LKBx"),
        a("E9XD"),
        a("J30X"),
        a("4Brf"),
        a("0oug"),
        a("sMBO");
      function W(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return Y(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          K(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function J(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var a =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null == a) return;
            var r,
              l,
              i = [],
              s = !0,
              n = !1;
            try {
              for (
                a = a.call(t);
                !(s = (r = a.next()).done) &&
                (i.push(r.value), !e || i.length !== e);
                s = !0
              );
            } catch (t) {
              (n = !0), (l = t);
            } finally {
              try {
                s || null == a.return || a.return();
              } finally {
                if (n) throw l;
              }
            }
            return i;
          })(t, e) ||
          K(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function K(t, e) {
        if (t) {
          if ("string" == typeof t) return Y(t, e);
          var a = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === a && t.constructor && (a = t.constructor.name),
            "Map" === a || "Set" === a
              ? Array.from(t)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? Y(t, e)
              : void 0
          );
        }
      }
      function Y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var a = 0, r = new Array(e); a < e; a++) r[a] = t[a];
        return r;
      }
      var G = function () {
        var t = new F.a("#application-form", {
            errorFieldCssClass: "is-invalid",
            lockForm: !1,
          }),
          e = "Заполните обязательное поле",
          a = "Введите корректный адрес email",
          r = document
            .getElementById("application-form")
            .querySelectorAll("input"),
          l = document
            .getElementById("application-form")
            .querySelectorAll("textarea"),
          i = document
            .getElementById("application-form")
            .querySelectorAll("select");
        [].concat(W(r), W(l), W(i)).forEach(function (r) {
          var l = r.getAttribute("id");
          l &&
            l.startsWith("base_form__question_") &&
            ("email" === r.type
              ? t.addField("#".concat(l), [
                  {
                    rule: "required",
                    errorMessage: e,
                  },
                  {
                    rule: "email",
                    errorMessage: a,
                  },
                ])
              : "checkbox" === r.type
              ? t.addField("#".concat(l), [
                  {
                    rule: "required",
                    errorMessage: " ",
                  },
                ])
              : "radio" === r.type
              ? t.addRequiredGroup(".js-applications-checkboxgroup_entity")
              : "hidden" !== r.type &&
                t.addField("#".concat(l), [
                  {
                    rule: "required",
                    errorMessage: e,
                  },
                ]));
        }),
          t.onSuccess(function () {
            var e = [];
            document
              .querySelectorAll(".js-form-exp-item")
              .forEach(function (t) {
                var a = {};
                t
                  .querySelectorAll(".rt-application-form_experienceItem")
                  .forEach(function (t) {
                    if (
                      !t.classList.contains("js-experience-dates") &&
                      t.querySelector("label")
                    ) {
                      var e = t.querySelector("label").textContent,
                        r = t.querySelector("input")
                          ? t.querySelector("input").value
                          : t.querySelector("textarea").value;
                      r && (a[e] = r);
                    } else if (t.classList.contains("js-experience-dates")) {
                      var l = t.querySelector("label").textContent,
                        i = t.querySelectorAll("input"),
                        s = [];
                      i.forEach(function (t) {
                        t.value && s.push(t.value);
                      }),
                        s.length && (a[l] = s.join("-"));
                    }
                  }),
                  Object.keys(a).length && e.push(a);
              });
            var a = e.reduce(function (t, e, a) {
              return "\n        "
                .concat(t, "\n        ")
                .concat(
                  t ? '<tr><td colspan="3">&nbsp;</td></tr>' : "",
                  '\n        <tr><td colspan="3">'
                )
                .concat(++a, "</td></tr>\n        ")
                .concat(
                  (function (t, e) {
                    return Object.entries(t)
                      .map(function (t) {
                        var e = J(t, 2),
                          a = e[0],
                          r = e[1];
                        return "<tr><td>&nbsp;</td><td><b>"
                          .concat(a, "</b></td><td>")
                          .concat(r, "</td></tr>\n");
                      })
                      .join("");
                  })(e),
                  "\n\n      "
                );
            }, "");
            (document
              .getElementById("application-form")
              .querySelector(".experience").value = "<table>".concat(
              a,
              "</table>"
            )),
              t.form.submit();
          });
      };
      var Q = function () {
          document.querySelector(".js-form-success").scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
        },
        tt = a("JSZk"),
        et = a.n(tt);
      var at = function () {
        var t = document
            .querySelector(".js-application-phone")
            .querySelector("input"),
          e = document
            .querySelector(".js-application-email")
            .querySelector("input");
        e.setAttribute("type", "text"),
          et()({
            mask: "+7 (999) 999-99-99",
          }).mask(t),
          et()({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,3}]",
            greedy: !1,
            definitions: {
              "*": {
                validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                cardinality: 1,
                casing: "lower",
              },
            },
          }).mask(e);
      };
      document.addEventListener("DOMContentLoaded", function () {
        var t, e, a, n;
        document.querySelector(".js-promo") && l(),
          document.querySelector(".js-deals") && i(),
          document.querySelector(".js-news-carousel") && s(),
          document.querySelector(".js-gallery-year") && c(),
          document.querySelector(".js-burger") &&
            document
              .querySelector(".js-burger")
              .addEventListener("click", function () {
                var t = this.closest(".js-body");
                t.classList.add("overflow"),
                  t.querySelector(".js-menu").classList.add("open");
              }),
          document.querySelector(".js-menu-close") &&
            (document
              .querySelector(".js-menu-close")
              .addEventListener("click", d),
            document
              .querySelector(".js-backdrop")
              .addEventListener("click", d)),
          document.querySelectorAll(".js-menu-dropdown").length && f(),
          document.querySelector(".js-search-button") && m(),
          document.querySelector(".js-gallery-popup") && b(),
          document.querySelector(".js-gallery-swiper") && h(),
          document.querySelector(".js-news-gallery") && g(),
          document.querySelector(".js-blind-version") && y(),
          document.querySelector(".js-timeline") ? j() : k(),
          document.querySelector(".js-success-map") && (S(), O()),
          document.querySelector(".js-detail-big") &&
            ((t = new r.i(".js-detail-thumbs", {
              watchSlidesProgress: !0,
              breakpoints: {
                320: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              },
            })),
            new r.i(".js-detail-big", {
              modules: [r.h, r.e],
              thumbs: {
                swiper: t,
              },
              navigation: {
                nextEl: ".js-thumbs-next",
                prevEl: ".js-thumbs-prev",
              },
            })),
          document.querySelectorAll(".js-deals-banner").length && P(),
          document.querySelector(".js-detail-tabNav") &&
            ((e = document.querySelector(".js-detail-tabNav")),
            (a = document.querySelectorAll(".js-detail-tab")),
            (n = document.querySelectorAll(".js-detail-tab-content")),
            e.addEventListener("click", function (t) {
              var e = t.target.closest(".js-detail-tab"),
                r = e.dataset.tab,
                l = document.getElementById(r);
              a.forEach(function (t) {
                t.classList.remove("active");
              }),
                n.forEach(function (t) {
                  t.classList.remove("active");
                }),
                e.classList.add("active"),
                l.classList.add("active");
            })),
          document.querySelectorAll(".js-rent-select").length && x(),
          document.querySelector(".js-rent-form") && D(),
          document.getElementById("callback") && (q(), I()),
          document.querySelector(".js-cards-swiper") && A(),
          document.querySelector(".js-main-categories") && E(),
          document.querySelector(".js-subscribe-btn") &&
            document
              .querySelector(".js-subscribe-btn")
              .addEventListener("click", function () {
                document
                  .querySelector(".js-subscribe-modal")
                  .classList.add("active"),
                  document.body.classList.add("overflow");
              }),
          document.querySelector(".js-news-subscribe") &&
            (document
              .querySelector(".js-news-subscribe")
              .addEventListener("click", function () {
                document
                  .querySelector(".js-subscribe-modal")
                  .classList.add("active"),
                  document.body.classList.add("overflow");
              }),
            document
              .querySelector(".js-close-subscribe-modal")
              .addEventListener("click", function () {
                document
                  .querySelector(".js-subscribe-modal")
                  .classList.remove("active"),
                  document.body.classList.remove("overflow"),
                  document.getElementById("subscribe-form").reset(),
                  (document.querySelector(
                    ".js-subscribe-result"
                  ).style.display = "none"),
                  (document.getElementById("subscribe-form").style.display =
                    "block");
              })),
          document.querySelector(".js-close-subscribe-modal") &&
            document
              .querySelector(".js-close-subscribe-modal")
              .addEventListener("click", function () {
                document
                  .querySelector(".js-subscribe-modal")
                  .classList.remove("active"),
                  document.body.classList.remove("overflow"),
                  document.getElementById("subscribe-form").reset(),
                  (document.querySelector(
                    ".js-subscribe-result"
                  ).style.display = "none"),
                  (document.getElementById("subscribe-form").style.display =
                    "block");
              }),
          document.querySelector(".js-news-subscribe") && V(),
          document.getElementById("subscribe-form") && B(),
          document.querySelector(".js-application-direction") && R(),
          document.querySelector(".js-experience-button") && X(),
          document.getElementById("application-form") && (G(), at()),
          document.querySelector(".js-form-success") && Q();
      });
      var rt = a("oCYn"),
        lt = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "rt-deals-list",
            },
            [
              e(
                "div",
                {
                  staticClass: "rt-container_wrap",
                },
                [
                  e(
                    "div",
                    {
                      staticClass: "rt-deals-list_top",
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass: "rt-deals-navigation",
                        },
                        t._l(t.tabsList, function (a) {
                          return e(
                            "div",
                            {
                              staticClass: "rt-deals-navigation_item",
                              class: {
                                active: t.activeComponent === a.component,
                              },
                              on: {
                                click: function (e) {
                                  return t.toggleActiveTab(a.component);
                                },
                              },
                            },
                            [
                              e(a.icon, {
                                tag: "component",
                              }),
                              t._v(" "),
                              e("span", [t._v(t._s(a.title))]),
                            ],
                            1
                          );
                        }),
                        0
                      ),
                    ]
                  ),
                  t._v(" "),
                  e(
                    "div",
                    {
                      staticClass: "rt-deals-list_bottom",
                    },
                    [
                      e(
                        "keep-alive",
                        [
                          e(t.activeComponent, {
                            tag: "component",
                            attrs: {
                              blockId: t.blockId,
                              params: t.params,
                              pageSlug: t.pageSlug,
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]
          );
        };
      lt._withStripped = !0;
      a("Kz25");
      var it = function () {
        var t = this._self._c;
        return t(
          "svg",
          {
            attrs: {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
          },
          [
            t("path", {
              attrs: {
                d: "M8 6H21",
                stroke: "#828282",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              },
            }),
            this._v(" "),
            t("path", {
              attrs: {
                d: "M8 12H21",
                stroke: "#828282",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              },
            }),
            this._v(" "),
            t("path", {
              attrs: {
                d: "M8 18H21",
                stroke: "#828282",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              },
            }),
            this._v(" "),
            t("path", {
              attrs: {
                d: "M3 6H3.01",
                stroke: "#828282",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              },
            }),
            this._v(" "),
            t("path", {
              attrs: {
                d: "M3 12H3.01",
                stroke: "#828282",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              },
            }),
            this._v(" "),
            t("path", {
              attrs: {
                d: "M3 18H3.01",
                stroke: "#828282",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              },
            }),
          ]
        );
      };
      it._withStripped = !0;
      var st = a("KHd+"),
        nt = Object(st.a)({}, it, [], !1, null, null, null).exports,
        ot = function () {
          var t = this._self._c;
          return t(
            "svg",
            {
              attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              t("path", {
                attrs: {
                  d: "M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z",
                  stroke: "#828282",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
              }),
              this._v(" "),
              t("path", {
                attrs: {
                  d: "M8 2V18",
                  stroke: "#828282",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
              }),
              this._v(" "),
              t("path", {
                attrs: {
                  d: "M16 6V22",
                  stroke: "#828282",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
              }),
            ]
          );
        };
      ot._withStripped = !0;
      var ct = Object(st.a)({}, ot, [], !1, null, null, null).exports,
        dt = function () {
          var t = this._self._c;
          return t(
            "svg",
            {
              attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              t("path", {
                attrs: {
                  d: "M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z",
                  stroke: "#828282",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
              }),
              this._v(" "),
              t("path", {
                attrs: {
                  d: "M16 2V6",
                  stroke: "#828282",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
              }),
              this._v(" "),
              t("path", {
                attrs: {
                  d: "M8 2V6",
                  stroke: "#828282",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
              }),
              this._v(" "),
              t("path", {
                attrs: {
                  d: "M3 10H21",
                  stroke: "#828282",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
              }),
            ]
          );
        };
      dt._withStripped = !0;
      var ut = Object(st.a)({}, dt, [], !1, null, null, null).exports,
        pt = function () {
          var t = this._self._c;
          return t(
            "svg",
            {
              attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              t("path", {
                attrs: {
                  d: "M10 13H14M20 9V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V9H20ZM20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V7C2 7.53043 2.21071 8.03914 2.58579 8.41421C2.96086 8.78929 3.46957 9 4 9H20C20.5304 9 21.0391 8.78929 21.4142 8.41421C21.7893 8.03914 22 7.53043 22 7V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4V4Z",
                  stroke: "#828282",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                },
              }),
            ]
          );
        };
      pt._withStripped = !0;
      var ft = Object(st.a)({}, pt, [], !1, null, null, null).exports,
        mt = function () {
          var t = this._self._c;
          return t(
            "svg",
            {
              staticClass: "with-fill",
              attrs: {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              t("path", {
                attrs: {
                  d: "M12.5882 8.23529H4.11765C3.55601 8.23529 3.01738 8.4584 2.62024 8.85554C2.22311 9.25268 2 9.79131 2 10.3529V14.5882C2 15.1499 2.22311 15.6885 2.62024 16.0856C3.01738 16.4828 3.55601 16.7059 4.11765 16.7059H5.17647V20.9412C5.17647 21.222 5.28802 21.4913 5.48659 21.6899C5.68516 21.8884 5.95448 22 6.23529 22H8.35294C8.63376 22 8.90307 21.8884 9.10164 21.6899C9.30021 21.4913 9.41176 21.222 9.41176 20.9412V16.7059H12.5882L17.8824 20.9412V4L12.5882 8.23529ZM15.7647 16.2824L13.6471 14.5882H4.11765V10.3529H13.6471L15.7647 8.65882V16.2824ZM22.6471 12.4706C22.6471 14.2812 21.6306 15.9224 20 16.7059V8.23529C21.62 9.02941 22.6471 10.6706 22.6471 12.4706Z",
                  fill: "#828282",
                },
              }),
            ]
          );
        };
      mt._withStripped = !0;
      var vt = Object(st.a)({}, mt, [], !1, null, null, null).exports,
        _t = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "rt-deals-list_row",
            },
            [
              e(
                "div",
                {
                  staticClass: "rt-deals-list_col rt-deals-list_col-left",
                },
                [
                  e("DealsFilter", {
                    attrs: {
                      id: "catalog",
                      blockId: t.blockId,
                      params: t.params,
                      filterOptions: t.filterOptions,
                      defaultFilterData: t.filtersData,
                    },
                    on: {
                      "update-filter": t.updateDealsFilter,
                    },
                  }),
                ],
                1
              ),
              t._v(" "),
              e(
                "div",
                {
                  staticClass: "rt-deals-list_col rt-deals-list_col-right",
                },
                [
                  t.isFiltered
                    ? e(
                        "div",
                        {
                          staticClass: "rt-deals",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass: "rt-deals_list",
                            },
                            [
                              t._l(t.deals, function (t) {
                                return e("DealCard", {
                                  key: t.id,
                                  attrs: {
                                    deal: t,
                                  },
                                });
                              }),
                              t._v(" "),
                              t.totalDealsCount
                                ? t._e()
                                : e("div", [
                                    t._v("По запросу ничего не найдено"),
                                  ]),
                              t._v(" "),
                              t.isLoad
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-deals_loadMore",
                                      class: {
                                        hidden: t.currentPage >= t.totalPages,
                                      },
                                      on: {
                                        click: t.loadMore,
                                      },
                                    },
                                    [t._v("Загрузить еще")]
                                  )
                                : e("Preloader"),
                            ],
                            2
                          ),
                        ]
                      )
                    : e("Preloader"),
                ],
                1
              ),
            ]
          );
        };
      _t._withStripped = !0;
      a("ToJy");
      var bt = function () {
        var t = this,
          e = t._self._c;
        return t.isLoad
          ? e(
              "div",
              {
                staticClass: "rt-catalog-filter",
              },
              [
                e(
                  "div",
                  {
                    staticClass: "rt-catalog-filter_btn",
                    on: {
                      click: t.toggleFilterOnMobile,
                    },
                  },
                  [t._v("Фильтр")]
                ),
                t._v(" "),
                e(
                  "form",
                  {
                    staticClass:
                      "rt-catalog-filter_form rt-form js-catalog-form",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "rt-catalog-filter_field rt-form_field",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-catalog-filter_label rt-form_label",
                          },
                          [t._v("Сортировка")]
                        ),
                        t._v(" "),
                        e("FilterSelect", {
                          attrs: {
                            options: t.filterOptions.sort,
                          },
                          model: {
                            value: t.filter.sort,
                            callback: function (e) {
                              t.$set(t.filter, "sort", e);
                            },
                            expression: "filter.sort",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "rt-catalog-filter_field rt-form_field",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-catalog-filter_label rt-form_label",
                          },
                          [t._v("Регион")]
                        ),
                        t._v(" "),
                        e("FilterSelect", {
                          attrs: {
                            options: t.filterOptions.region,
                            searchable: !0,
                          },
                          model: {
                            value: t.filter.region,
                            callback: function (e) {
                              t.$set(t.filter, "region", e);
                            },
                            expression: "filter.region",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "rt-catalog-filter_field rt-form_field",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-catalog-filter_label rt-form_label",
                          },
                          [t._v("Тип актива")]
                        ),
                        t._v(" "),
                        e("FilterSelect", {
                          attrs: {
                            options: t.filterOptions.assetType,
                          },
                          model: {
                            value: t.filter.type,
                            callback: function (e) {
                              t.$set(t.filter, "type", e);
                            },
                            expression: "filter.type",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "rt-catalog-filter_field rt-form_field",
                      },
                      [
                        t._m(0),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "rt-form_row",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "rt-form_col",
                              },
                              [
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "от",
                                  },
                                  model: {
                                    value: t.filter.area_from,
                                    callback: function (e) {
                                      t.$set(t.filter, "area_from", e);
                                    },
                                    expression: "filter.area_from",
                                  },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass: "rt-form_col",
                              },
                              [
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "до",
                                  },
                                  model: {
                                    value: t.filter.area_to,
                                    callback: function (e) {
                                      t.$set(t.filter, "area_to", e);
                                    },
                                    expression: "filter.area_to",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "rt-catalog-filter_field rt-form_field",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-catalog-filter_label rt-form_label",
                          },
                          [t._v("Площадь земельного участка, га")]
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "rt-form_row",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "rt-form_col",
                              },
                              [
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "от",
                                  },
                                  model: {
                                    value: t.filter.land_area_from,
                                    callback: function (e) {
                                      t.$set(t.filter, "land_area_from", e);
                                    },
                                    expression: "filter.land_area_from",
                                  },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass: "rt-form_col",
                              },
                              [
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "до",
                                  },
                                  model: {
                                    value: t.filter.land_area_to,
                                    callback: function (e) {
                                      t.$set(t.filter, "land_area_to", e);
                                    },
                                    expression: "filter.land_area_to",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "rt-catalog-filter_field rt-catalog-filter_field-full rt-form_field",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-catalog-filter_label rt-form_label",
                          },
                          [t._v("Цена, руб.")]
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "rt-form_row",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "rt-form_col",
                              },
                              [
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "от",
                                  },
                                  model: {
                                    value: t.filter.price_from,
                                    callback: function (e) {
                                      t.$set(t.filter, "price_from", e);
                                    },
                                    expression: "filter.price_from",
                                  },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass: "rt-form_col",
                              },
                              [
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "до",
                                  },
                                  model: {
                                    value: t.filter.price_to,
                                    callback: function (e) {
                                      t.$set(t.filter, "price_to", e);
                                    },
                                    expression: "filter.price_to",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "rt-catalog-filter_field rt-catalog-filter_field-full rt-form_field",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-catalog-filter_label rt-form_label",
                          },
                          [t._v("Статус торгов")]
                        ),
                        t._v(" "),
                        e("FilterSelect", {
                          attrs: {
                            options: t.filterOptions.status,
                          },
                          model: {
                            value: t.filter.status,
                            callback: function (e) {
                              t.$set(t.filter, "status", e);
                            },
                            expression: "filter.status",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "rt-catalog-filter_field rt-form_field",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-catalog-filter_label rt-form_label",
                          },
                          [t._v("Собственник")]
                        ),
                        t._v(" "),
                        e("FilterSelect", {
                          attrs: {
                            options: t.filterOptions.owners,
                            searchable: !0,
                          },
                          model: {
                            value: t.filter.owner,
                            callback: function (e) {
                              t.$set(t.filter, "owner", e);
                            },
                            expression: "filter.owner",
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass: "rt-catalog-filter_field rt-form_field",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-catalog-filter_label rt-form_label",
                          },
                          [t._v("Дата подачи заявок")]
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "rt-form_row js-date-range",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "rt-form_col",
                              },
                              [
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.filter.date_from,
                                      expression: "filter.date_from",
                                    },
                                  ],
                                  staticClass: "date js-date-start",
                                  attrs: {
                                    type: "text",
                                    placeholder: "от",
                                  },
                                  domProps: {
                                    value: t.filter.date_from,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.filter,
                                          "date_from",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass: "rt-form_col",
                              },
                              [
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.filter.date_to,
                                      expression: "filter.date_to",
                                    },
                                  ],
                                  staticClass: "date js-date-end",
                                  attrs: {
                                    type: "text",
                                    placeholder: "до",
                                  },
                                  domProps: {
                                    value: t.filter.date_to,
                                  },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.filter,
                                          "date_to",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "rt-catalog-filter_field rt-catalog-filter_field-full rt-form_field",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-catalog-filter_btn rt-catalog-filter_btn-clear",
                            on: {
                              click: t.clearFilters,
                            },
                          },
                          [t._v("Сбросить")]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            )
          : t._e();
      };
      bt._withStripped = !0;
      var ht = {
          methods: {
            toggleFilterOnMobile: function (t) {
              t.target.parentNode
                .querySelector(".js-catalog-form")
                .classList.toggle("active");
            },
          },
        },
        gt = function () {
          var t = this,
            e = t._self._c;
          return e(
            "Multiselect",
            {
              staticClass: "rt-multiselect",
              attrs: {
                options: t.options,
                placeholder: t.getPlaceholder(),
                searchable: !!t.searchable,
                value: t.value,
                "show-labels": !1,
                label: "name",
              },
              on: {
                input: t.initialValue,
                "search-change": t.searchChange,
              },
            },
            [
              e(
                "span",
                {
                  attrs: {
                    slot: "noOptions",
                  },
                  slot: "noOptions",
                },
                [t._v("\n      Список пуст\n    ")]
              ),
              t._v(" "),
              e(
                "span",
                {
                  attrs: {
                    slot: "noResult",
                  },
                  slot: "noResult",
                },
                [
                  t._v(
                    "\n      Элементы не найдены, попробуйте изменить запрос\n    "
                  ),
                ]
              ),
            ]
          );
        };
      gt._withStripped = !0;
      var yt = a("jl8+"),
        Ct = {
          components: {
            Multiselect: a.n(yt).a,
          },
          props: ["options", "value", "searchable"],
          methods: {
            initialValue: function (t) {
              this.$emit("input", t);
            },
            searchChange: function (t) {
              this.$emit("select-search-change", t);
            },
            getPlaceholder: function () {
              return this.searchable ? "Введите или выберите" : "Выберите";
            },
          },
        },
        wt = Object(st.a)(Ct, gt, [], !1, null, null, null).exports,
        jt = function () {
          var t = this;
          return (0, t._self._c)("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model.lazy",
                value: t.model,
                expression: "model",
                modifiers: {
                  lazy: !0,
                },
              },
            ],
            class: t.classes,
            attrs: {
              type: t.type,
              placeholder: t.placeholder,
            },
            domProps: {
              value: t.model,
            },
            on: {
              keypress: t.disableDot,
              change: function (e) {
                t.model = e.target.value;
              },
            },
          });
        };
      jt._withStripped = !0;
      var St = {
          props: ["type", "classes", "value", "placeholder"],
          computed: {
            model: {
              get: function () {
                return this.value;
              },
              set: function (t) {
                this.$emit("input", t);
              },
            },
          },
          methods: {
            disableDot: function (t) {
              "number" === this.type && 46 === t.charCode && t.preventDefault();
            },
          },
        },
        Ot = Object(st.a)(St, jt, [], !1, null, null, null).exports,
        kt = (a("ls82"), a("YGK4"), a("yq1k"), a("5s+n"), a("vDqi")),
        Pt = a.n(kt);
      function xt(t) {
        return (xt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function Dt(t, e, a, r, l, i, s) {
        try {
          var n = t[i](s),
            o = n.value;
        } catch (t) {
          return void a(t);
        }
        n.done ? e(o) : Promise.resolve(o).then(r, l);
      }
      function Lt(t) {
        return function () {
          var e = this,
            a = arguments;
          return new Promise(function (r, l) {
            var i = t.apply(e, a);
            function s(t) {
              Dt(i, r, l, s, n, "next", t);
            }
            function n(t) {
              Dt(i, r, l, s, n, "throw", t);
            }
            s(void 0);
          });
        };
      }
      function qt(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return $t(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          It(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ft(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var a =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null == a) return;
            var r,
              l,
              i = [],
              s = !0,
              n = !1;
            try {
              for (
                a = a.call(t);
                !(s = (r = a.next()).done) &&
                (i.push(r.value), !e || i.length !== e);
                s = !0
              );
            } catch (t) {
              (n = !0), (l = t);
            } finally {
              try {
                s || null == a.return || a.return();
              } finally {
                if (n) throw l;
              }
            }
            return i;
          })(t, e) ||
          It(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function It(t, e) {
        if (t) {
          if ("string" == typeof t) return $t(t, e);
          var a = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === a && t.constructor && (a = t.constructor.name),
            "Map" === a || "Set" === a
              ? Array.from(t)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? $t(t, e)
              : void 0
          );
        }
      }
      function $t(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var a = 0, r = new Array(e); a < e; a++) r[a] = t[a];
        return r;
      }
      function At(t) {
        var e = new Set();
        return t.filter(function (t) {
          var a = e.has(t.id);
          return e.add(t.id), !a;
        });
      }
      function Et(t) {
        return Object.keys(t)
          .filter(function (e) {
            return !!t[e];
          })
          .reduce(function (e, a) {
            var r = "string" == typeof t[a] ? t[a] : t[a].name;
            if ("date_from" === a || "date_to" === a) {
              var l = Ft(t[a].split("."), 3),
                i = l[0],
                s = l[1],
                n = l[2];
              r = "".concat(n, "-").concat(s, "-").concat(i);
            }
            return [].concat(qt(e), ["filter[".concat(a, "]=").concat(r)]);
          }, [])
          .join("&");
      }
      function Vt(t) {
        return Mt.apply(this, arguments);
      }
      function Mt() {
        return (Mt = Lt(
          regeneratorRuntime.mark(function t(e) {
            var a, r, l, i;
            return regeneratorRuntime.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (a = e.slug),
                      (r = Et(e.filters)),
                      (l = ""),
                      e.isArchive
                        ? (l = "&archive=1")
                        : e.isPreview
                        ? (l = "&preview=1")
                        : e.isCalendar && (l = "&calendar=1"),
                      (t.next = 6),
                      Pt.a.get(
                        "/_ajax/plist/"
                          .concat(e.blockId, "/")
                          .concat(e.currentPage + 1, "?json=1")
                          .concat(l, "&")
                          .concat(r)
                      )
                    );
                  case 6:
                    (i = t.sent),
                      (e.deals = At([].concat(qt(e.deals), qt(i.data.list)))),
                      (e.currentPage = i.data.page),
                      (e.totalDealsCount = i.data.total),
                      (e.totalPages = i.data.total / i.data.per_page),
                      (e.isLoad = !0),
                      (e.isFiltered = !0),
                      (e.filterOptions = i.data.filters),
                      (e.filtersData = i.data.filters_data),
                      (e.slug = i.data.pageSlug),
                      Nt(e, a);
                  case 17:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      var Bt = {
        administrativeType: "administrative_type",
        assetType: "type",
      };
      function Rt(t) {
        for (
          var e = Object.entries(t.params),
            a = ["administrative_type", "region", "status", "type", "sort"],
            r = {
              administrative_type: "administrativeType",
              type: "assetType",
            },
            l = function (e, l) {
              if (a.includes(e)) {
                var i = r.hasOwnProperty(e) ? r[e] : e;
                if (((t.filter[e] = {}), t.filterOptions.hasOwnProperty(i))) {
                  var s = t.filterOptions[i].filter(function (t) {
                    return t.code === l;
                  });
                  (t.filter[e] = s.length ? s[0] : {}), !0;
                }
              } else
                t.filter[e] =
                  "date_from" === e || "date_to" === e
                    ? new Date(l).toLocaleDateString("ru-RU")
                    : l;
              !t.filter[e] &&
                t.defaultFilterData[e] &&
                (t.filter[e] = t.defaultFilterData[e]);
            },
            i = 0,
            s = e;
          i < s.length;
          i++
        ) {
          var n = Ft(s[i], 2);
          l(n[0], n[1]);
        }
        if (t.defaultFilterData)
          for (var o in t.defaultFilterData)
            !t.filter[o] &&
              t.defaultFilterData[o] &&
              l(o, t.defaultFilterData[o]);
      }
      function Tt(t) {
        return t.get("calendar")
          ? "calendar"
          : t.get("archive")
          ? "archive"
          : t.get("preview")
          ? "preview"
          : t.get("map")
          ? "map"
          : void 0;
      }
      function Nt(t, e) {
        var a,
          r = new URL(window.location.href),
          l = new URLSearchParams(r.search);
        if (t.slug)
          (a = new URLSearchParams()),
            Tt(l) && a.set(Tt(l), "1"),
            (r.search = a.toString()),
            (r.pathname = r.pathname.replace(
              r.pathname,
              "/deals/".concat(t.slug)
            )),
            window.history.pushState({}, document.title, r.toString());
        else {
          for (var i in ((l = new URLSearchParams(r.search)), t.filters)) {
            var s = "filter[".concat(Bt[i] ? Bt[i] : i, "]");
            l.delete(s),
              t.filters[i] &&
                (t.filters[i].code
                  ? l.set(s, t.filters[i].code)
                  : "object" !== xt(t.filters[i]) && l.set(s, t.filters[i]));
          }
          (r.search = l.toString()),
            (r.pathname = "/deals"),
            window.history.pushState({}, document.title, r.toString());
        }
      }
      function Ut(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function Ht(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ut(Object(a), !0).forEach(function (e) {
                zt(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : Ut(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function zt(t, e, a) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var Zt = {
          components: {
            FilterSelect: wt,
            FilterInput: Ot,
          },
          mixins: [ht],
          props: {
            id: {
              type: [Number, String],
              required: !0,
            },
            blockId: {
              type: [String, Number],
              required: !0,
            },
            params: {
              type: Object,
            },
            filterOptions: {
              type: Object,
              required: !0,
            },
            defaultFilterData: {
              type: Object,
            },
          },
          data: function () {
            return {
              filter: {
                region: null,
                type: null,
                administrative_type: null,
                area_from: null,
                area_to: null,
                land_area_from: null,
                land_area_to: null,
                price_from: null,
                price_to: null,
                status: null,
                owner: null,
                date_from: null,
                date_to: null,
                sort: null,
                filtering_date: null,
              },
            };
          },
          computed: {
            isLoad: function () {
              return !!Object.keys(this.filterOptions).length;
            },
          },
          watch: {
            filter: {
              handler: function (t) {
                this.$emit("update-filter", t);
              },
              deep: !0,
            },
            isLoad: function () {
              var t = this;
              this.$nextTick(function () {
                Rt(t), t.initDatepickerRange();
              });
            },
          },
          methods: {
            initDatepickerRange: function () {
              var t = this,
                e = {
                  startDay: 1,
                  formatter: function (t, e, a) {
                    t.value = e.toLocaleDateString("ru-RU");
                  },
                  customMonths: [
                    "Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь",
                  ],
                  customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                  overlayPlaceholder: "Год",
                  overlayButton: "Применить",
                  showAllDates: !0,
                },
                a = document.querySelector(".js-date-start"),
                r = document.querySelector(".js-date-end"),
                l = N()(
                  a,
                  Ht(
                    Ht({}, e),
                    {},
                    {
                      id: this.id,
                      onSelect: function (e, a) {
                        t.filter.date_from = new Date(a).toLocaleDateString(
                          "ru-RU"
                        );
                      },
                    }
                  )
                ),
                i = N()(
                  r,
                  Ht(
                    Ht({}, e),
                    {},
                    {
                      id: this.id,
                      position: "br",
                      onSelect: function (e, a) {
                        t.filter.date_to = new Date(a).toLocaleDateString(
                          "ru-RU"
                        );
                      },
                    }
                  )
                );
              l.getRange(), i.getRange();
            },
            clearFilters: function () {
              this.$set(this, "filter", {
                region: null,
                type: null,
                administrative_type: null,
                area_from: null,
                area_to: null,
                land_area_from: null,
                land_area_to: null,
                price_from: null,
                price_to: null,
                status: this.filterOptions.status[0],
                owner: null,
                date_from: null,
                date_to: null,
                sort: null,
                filtering_date: null,
              });
            },
          },
          mounted: function () {
            Rt(this);
          },
        },
        Xt = Object(st.a)(
          Zt,
          bt,
          [
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "rt-catalog-filter_label rt-form_label",
                },
                [this._v("Площадь помещения, м"), t("sup", [this._v("2")])]
              );
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        Wt = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "rt-calendar-cart",
              attrs: {
                "data-bid": t.deal.bid,
                itemscope: "",
                itemtype: "https://schema.org/Product",
              },
            },
            [
              e(
                "div",
                {
                  staticClass: "rt-calendar-cart_inner",
                },
                [
                  e(
                    "div",
                    {
                      staticClass: "rt-calendar-cart_image",
                    },
                    [
                      t.deal.photo.main
                        ? e("img", {
                            attrs: {
                              src: t.deal.photo.main,
                              alt: "",
                              loading: "lazy",
                              itemprop: "image",
                            },
                          })
                        : t.deal.photo.additional.length
                        ? e("img", {
                            attrs: {
                              src: t.deal.photo.additional[0],
                              alt: "",
                              loading: "lazy",
                              itemprop: "image",
                            },
                          })
                        : e("img", {
                            attrs: {
                              src: "/build/images/capital/no-image.jpeg",
                              alt: "",
                              loading: "lazy",
                              itemprop: "image",
                            },
                          }),
                    ]
                  ),
                  t._v(" "),
                  e(
                    "div",
                    {
                      staticClass: "rt-calendar-cart_content",
                    },
                    [
                      t.deal.price || t.deal.startPrice
                        ? e(
                            "div",
                            {
                              staticClass: "rt-calendar-cart_price",
                              attrs: {
                                itemprop: "offers",
                                itemscope: "",
                                itemtype: "https://schema.org/Offer",
                              },
                            },
                            [
                              e(
                                "span",
                                {
                                  attrs: {
                                    itemprop: "price",
                                    content: t.formatPrice(
                                      t.deal.price || t.deal.startPrice
                                    ),
                                  },
                                },
                                [
                                  t._v(
                                    t._s(
                                      t.formatPrice(
                                        t.deal.price || t.deal.startPrice
                                      )
                                    )
                                  ),
                                ]
                              ),
                              t._v(" "),
                              e(
                                "span",
                                {
                                  attrs: {
                                    itemprop: "priceCurrency",
                                    content: "RUB",
                                  },
                                },
                                [t._v("руб.")]
                              ),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass: "rt-calendar-cart_title",
                        },
                        [
                          e(
                            "a",
                            {
                              attrs: {
                                href: "/deals/".concat(t.deal.id),
                              },
                            },
                            [
                              e(
                                "span",
                                {
                                  attrs: {
                                    itemprop: "name",
                                  },
                                },
                                [t._v(t._s(t.deal.title))]
                              ),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass: "rt-calendar-cart_params",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass: "rt-calendar-cart_paramsLeft",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass: "rt-calendar-cart_param",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_paramName",
                                    },
                                    [t._v("Тип актива:")]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "rt-calendar-cart_paramValue",
                                    },
                                    [t._v(t._s(t.deal.assetType))]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "rt-calendar-cart_param",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_paramName",
                                    },
                                    [t._v("Регион:")]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "rt-calendar-cart_paramValue",
                                    },
                                    [t._v(t._s(t.deal.region))]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "rt-calendar-cart_param",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_paramName",
                                    },
                                    [t._v("Адрес:")]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "rt-calendar-cart_paramValue",
                                    },
                                    [t._v(t._s(t.deal.address))]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              t.deal.area
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_param",
                                    },
                                    [
                                      t._m(0),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramValue",
                                        },
                                        [t._v(t._s(t.deal.area))]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              t.deal.landArea
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_param",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramName",
                                        },
                                        [
                                          t._v(
                                            "Площадь земельного участка, га:"
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramValue",
                                        },
                                        [t._v(t._s(t.deal.landArea))]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              t.deal.owner
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_param",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramName",
                                        },
                                        [t._v("Собственник:")]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramValue",
                                        },
                                        [t._v(t._s(t.deal.owner.title))]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              [
                                "Актив реализован",
                                "Отмена торгов",
                                "Торги не состоялись",
                              ].includes(t.deal.bidStatus) &&
                              t.deal.participants
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_param",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramName",
                                        },
                                        [t._v("Количество участников:")]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramValue",
                                        },
                                        [t._v(t._s(t.deal.participants))]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              [
                                "Актив реализован",
                                "Отмена торгов",
                                "Торги не состоялись",
                              ].includes(t.deal.bidStatus) && t.deal.winner
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_param",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramName",
                                        },
                                        [t._v("Победитель:")]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramValue",
                                        },
                                        [t._v(t._s(t.deal.winner))]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              [
                                "Актив реализован",
                                "Отмена торгов",
                                "Торги не состоялись",
                              ].includes(t.deal.bidStatus) && t.deal.sellPrice
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_param",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramName",
                                        },
                                        [t._v("Цена продажи:")]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-calendar-cart_paramValue",
                                        },
                                        [
                                          t._v(
                                            t._s(
                                              t.formatPrice(t.deal.sellPrice)
                                            ) + " руб."
                                          ),
                                        ]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "rt-calendar-cart_param",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-calendar-cart_paramName",
                                    },
                                    [t._v("Площадка торгов:")]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "rt-calendar-cart_paramValue",
                                    },
                                    [
                                      t.deal.exchangeUrl
                                        ? e(
                                            "a",
                                            {
                                              attrs: {
                                                href: t.deal.exchangeUrl,
                                                target: "_blank",
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n                  " +
                                                  t._s(t.deal.exchange) +
                                                  "\n                "
                                              ),
                                            ]
                                          )
                                        : e("span", [
                                            t._v(
                                              "\n                  " +
                                                t._s(t.deal.exchange) +
                                                "\n                "
                                            ),
                                          ]),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass: "rt-deals-cart_paramsRight",
                            },
                            [
                              t.deal.dateFrom
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-deals-cart_param",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-deals-cart_paramName",
                                        },
                                        [t._v("Начало приема заявок:")]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-deals-cart_paramValue",
                                        },
                                        [t._v(t._s(t.deal.dateFrom))]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              t.deal.dateTo
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-deals-cart_param",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-deals-cart_paramName",
                                        },
                                        [t._v("Окончание приема заявок:")]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-deals-cart_paramValue",
                                        },
                                        [t._v(t._s(t.deal.dateTo))]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              t.deal.bidDate
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-deals-cart_param",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-deals-cart_paramName",
                                        },
                                        [t._v("Дата торгов:")]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "rt-deals-cart_paramValue",
                                        },
                                        [t._v(t._s(t.deal.bidDate))]
                                      ),
                                    ]
                                  )
                                : t._e(),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "rt-deals-cart_docs",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-deals-cart_docName",
                                    },
                                    [t._v("Документация по торгам")]
                                  ),
                                  t._v(" "),
                                  e("a", {
                                    attrs: {
                                      href: "/deals/".concat(
                                        t.deal.id,
                                        "?docs-active=1#bidding_documentation"
                                      ),
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  t._v(" "),
                  e("div", {
                    staticClass: "rt-calendar-cart_status",
                    domProps: {
                      innerHTML: t._s(t.formatStatus()),
                    },
                  }),
                ]
              ),
            ]
          );
        };
      Wt._withStripped = !0;
      a("toAj");
      var Jt = {
          methods: {
            formatPrice: function (t) {
              return (t / 1)
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                .replace(".00", "");
            },
          },
        },
        Kt = {
          props: {
            deal: {
              type: Object,
              required: !0,
            },
          },
          mixins: [Jt],
          methods: {
            formatStatus: function () {
              return this.deal.bidStatus.split("/").join("<br>");
            },
          },
        },
        Yt = Object(st.a)(
          Kt,
          Wt,
          [
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "rt-calendar-cart_paramName",
                },
                [
                  this._v("Площадь помещения, м"),
                  t("sup", [this._v("2")]),
                  this._v(":"),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        Gt = function () {
          this._self._c;
          return this._m(0);
        };
      Gt._withStripped = !0;
      var Qt = Object(st.a)(
          {},
          Gt,
          [
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "rt-deals-loading",
                },
                [
                  t("span", {
                    staticClass: "rt-deals-loading_dot",
                  }),
                  this._v(" "),
                  t("span", {
                    staticClass: "rt-deals-loading_dot",
                  }),
                  this._v(" "),
                  t("span", {
                    staticClass: "rt-deals-loading_dot",
                  }),
                  this._v(" "),
                  t("span", {
                    staticClass: "rt-deals-loading_dot",
                  }),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        te = {
          components: {
            DealCard: Yt,
            DealsFilter: Xt,
            Preloader: Qt,
          },
          props: {
            blockId: {
              type: [String, Number],
              required: !0,
            },
            params: {
              type: Object,
            },
            pageSlug: {
              type: String,
              default: "",
            },
          },
          data: function () {
            return {
              currentPage: 0,
              deals: [],
              totalDealsCount: null,
              isLoad: !1,
              filters: {},
              filtersData: {},
              totalPages: null,
              isFiltered: !1,
              filterOptions: {},
              slug: this.pageSlug,
            };
          },
          methods: {
            updateDealsFilter: function (t) {
              (this.filters = t),
                (this.isFiltered = !1),
                (this.currentPage = 0),
                (this.deals = []),
                this.getCatalogDeals();
            },
            getCatalogDeals: function () {
              Vt(this);
            },
            loadMore: function () {
              (this.isLoad = !1), this.getCatalogDeals();
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.getCatalogDeals();
            });
          },
        },
        ee = Object(st.a)(te, _t, [], !1, null, null, null).exports,
        ae =
          (a("SYor"),
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "rt-deals-map",
              },
              [
                e("MapFilter", {
                  attrs: {
                    blockId: t.blockId,
                    params: t.params,
                  },
                  on: {
                    "update-filter": t.updateDealsFilter,
                  },
                }),
                t._v(" "),
                t.isLoad
                  ? e(
                      "div",
                      {
                        staticClass: "rt-deals-map_container",
                        on: {
                          click: t.hideBalloon,
                        },
                      },
                      [
                        e(
                          "yandex-map",
                          {
                            attrs: {
                              settings: t.settings,
                              coords: t.mapSettings.coords,
                              zoom: t.mapSettings.zoom,
                              controls: t.mapSettings.controls,
                              "cluster-options": t.clusterOptions,
                              options: t.mapSettings.options,
                              "show-all-markers": !0,
                            },
                            on: {
                              "map-was-initialized": t.mapLoaded,
                            },
                          },
                          t._l(t.deals, function (a) {
                            return e("ymap-marker", {
                              key: a.key,
                              attrs: {
                                "marker-id": a.id,
                                coords: a.coordinates
                                  .split(",")
                                  .map(function (t) {
                                    return t.trim();
                                  }),
                                "cluster-name": "deals",
                                icon: t.markerSettings.markerIcon,
                                "balloon-template": t.balloonTemplate(a),
                                options: t.markerSettings.markerOptions,
                                balloon: {
                                  header: a.title,
                                  placemarkId: a.id,
                                  body: a.bidStatus,
                                  footer: t.formatPrice(
                                    a.price || a.startPrice
                                  ),
                                },
                              },
                              on: {
                                balloonopen: t.balloonOpen,
                                balloonclose: t.balloonClose,
                              },
                            });
                          }),
                          1
                        ),
                      ],
                      1
                    )
                  : e("Preloader"),
              ],
              1
            );
          });
      ae._withStripped = !0;
      var re = a("9c6q"),
        le = function () {
          var t = this,
            e = t._self._c;
          return t.isLoad
            ? e(
                "div",
                {
                  staticClass: "rt-map-filter js-catalog-filter",
                },
                [
                  e(
                    "div",
                    {
                      staticClass: "rt-map-filter_btn js-catalog-btn",
                      on: {
                        click: t.toggleFilterOnMobile,
                      },
                    },
                    [t._v("Фильтр")]
                  ),
                  t._v(" "),
                  e(
                    "form",
                    {
                      staticClass: "rt-map-filter_form rt-form js-catalog-form",
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass:
                            "rt-map-filter_row rt-map-filter_row-top",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass: "rt-map-filter_item rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-map-filterLabel rt-form_label",
                                },
                                [t._v("Регион")]
                              ),
                              t._v(" "),
                              e("FilterSelect", {
                                attrs: {
                                  options: t.filterOptions.region,
                                  searchable: !0,
                                },
                                model: {
                                  value: t.filter.region,
                                  callback: function (e) {
                                    t.$set(t.filter, "region", e);
                                  },
                                  expression: "filter.region",
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass: "rt-map-filter_item rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-map-filterLabel rt-form_label",
                                },
                                [t._v("Тип актива")]
                              ),
                              t._v(" "),
                              e("FilterSelect", {
                                attrs: {
                                  options: t.filterOptions.assetType,
                                },
                                model: {
                                  value: t.filter.type,
                                  callback: function (e) {
                                    t.$set(t.filter, "type", e);
                                  },
                                  expression: "filter.type",
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-map-filter_item rt-map-filter_item-status rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-map-filterLabel rt-form_label",
                                },
                                [t._v("Статус торгов")]
                              ),
                              t._v(" "),
                              e("FilterSelect", {
                                attrs: {
                                  options: t.filterOptions.status,
                                },
                                model: {
                                  value: t.filter.status,
                                  callback: function (e) {
                                    t.$set(t.filter, "status", e);
                                  },
                                  expression: "filter.status",
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e("div", {
                            staticClass:
                              "rt-map-filter_toggler rt-toggle-collapse",
                            class: {
                              "is-opened": t.isOpened,
                            },
                            on: {
                              click: t.toggleVisibleForm,
                            },
                          }),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass: "rt-map-filter_unviewed rt-collapse",
                          class: {
                            "is-opened": t.isOpened,
                          },
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass: "rt-map-filter_row",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-map-filter_item rt-map-filter_item-50 rt-form_field",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "rt-map-filterLabel rt-form_label",
                                    },
                                    [t._v("Цена, руб")]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-form_row",
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass: "rt-form_col",
                                        },
                                        [
                                          e("FilterInput", {
                                            attrs: {
                                              type: "number",
                                              classes: "number",
                                              placeholder: "от",
                                            },
                                            model: {
                                              value: t.filter.price_from,
                                              callback: function (e) {
                                                t.$set(
                                                  t.filter,
                                                  "price_from",
                                                  e
                                                );
                                              },
                                              expression: "filter.price_from",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass: "rt-form_col",
                                        },
                                        [
                                          e("FilterInput", {
                                            attrs: {
                                              type: "number",
                                              classes: "number",
                                              placeholder: "до",
                                            },
                                            model: {
                                              value: t.filter.price_to,
                                              callback: function (e) {
                                                t.$set(t.filter, "price_to", e);
                                              },
                                              expression: "filter.price_to",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-map-filter_item rt-map-filter_item-50 rt-form_field",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "rt-map-filterLabel rt-form_label",
                                    },
                                    [t._v("Дата подачи заявок")]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-form_row js-date-range",
                                      attrs: {
                                        "data-type": "map",
                                      },
                                    },
                                    [
                                      e(
                                        "div",
                                        {
                                          staticClass: "rt-form_col",
                                        },
                                        [
                                          e("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.filter.date_from,
                                                expression: "filter.date_from",
                                              },
                                            ],
                                            staticClass: "date js-date-start",
                                            attrs: {
                                              type: "text",
                                              placeholder: "от",
                                            },
                                            domProps: {
                                              value: t.filter.date_from,
                                            },
                                            on: {
                                              input: function (e) {
                                                e.target.composing ||
                                                  t.$set(
                                                    t.filter,
                                                    "date_from",
                                                    e.target.value
                                                  );
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        {
                                          staticClass: "rt-form_col",
                                        },
                                        [
                                          e("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.filter.date_to,
                                                expression: "filter.date_to",
                                              },
                                            ],
                                            staticClass: "date js-date-end",
                                            attrs: {
                                              type: "text",
                                              placeholder: "до",
                                            },
                                            domProps: {
                                              value: t.filter.date_to,
                                            },
                                            on: {
                                              input: function (e) {
                                                e.target.composing ||
                                                  t.$set(
                                                    t.filter,
                                                    "date_to",
                                                    e.target.value
                                                  );
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass: "rt-map-filter_row",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-map-filter_item rt-map-filter_item-50 rt-map-filter_item-touchFull rt-form_field",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "rt-map-filterLabel rt-form_label",
                                    },
                                    [t._v("Собственник")]
                                  ),
                                  t._v(" "),
                                  e("FilterInput", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "Введите название компании",
                                    },
                                    model: {
                                      value: t.filter.owner,
                                      callback: function (e) {
                                        t.$set(t.filter, "owner", e);
                                      },
                                      expression: "filter.owner",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-map-filter_btn rt-map-filter_btn-clear",
                              on: {
                                click: t.clearFilters,
                              },
                            },
                            [t._v("Сбросить")]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              )
            : t._e();
        };
      function ie(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function se(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ie(Object(a), !0).forEach(function (e) {
                ne(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : ie(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function ne(t, e, a) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      function oe(t, e, a, r, l, i, s) {
        try {
          var n = t[i](s),
            o = n.value;
        } catch (t) {
          return void a(t);
        }
        n.done ? e(o) : Promise.resolve(o).then(r, l);
      }
      le._withStripped = !0;
      var ce = {
        components: {
          FilterSelect: wt,
          FilterInput: Ot,
        },
        mixins: [ht],
        props: {
          blockId: {
            type: [String, Number],
            required: !0,
          },
          params: {
            type: Object,
          },
        },
        data: function () {
          return {
            isOpened: !1,
            isLoad: !1,
            filterOptions: [],
            filter: {
              region: null,
              type: null,
              status: null,
              price_from: null,
              price_to: null,
              date_from: null,
              date_to: null,
              owner: null,
            },
          };
        },
        watch: {
          filter: {
            handler: function (t, e) {
              this.$emit("update-filter", t), Nt(this);
            },
            deep: !0,
          },
          isLoad: function () {
            var t = this;
            this.$nextTick(function () {
              Rt(t), t.initDatepickerRange();
            });
          },
        },
        methods: {
          getFilterOptions: function () {
            var t,
              e = this;
            return ((t = regeneratorRuntime.mark(function t() {
              var a;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        Pt.a.get("/_ajax/plist/".concat(e.blockId, "/1?json=1"))
                      );
                    case 2:
                      (a = t.sent),
                        (e.filterOptions = a.data.filters),
                        (e.isLoad = !0);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })),
            function () {
              var e = this,
                a = arguments;
              return new Promise(function (r, l) {
                var i = t.apply(e, a);
                function s(t) {
                  oe(i, r, l, s, n, "next", t);
                }
                function n(t) {
                  oe(i, r, l, s, n, "throw", t);
                }
                s(void 0);
              });
            })();
          },
          initDatepickerRange: function () {
            var t = this,
              e = {
                startDay: 1,
                formatter: function (t, e, a) {
                  t.value = e.toLocaleDateString("ru-RU");
                },
                customMonths: [
                  "Январь",
                  "Февраль",
                  "Март",
                  "Апрель",
                  "Май",
                  "Июнь",
                  "Июль",
                  "Август",
                  "Сентябрь",
                  "Октябрь",
                  "Ноябрь",
                  "Декабрь",
                ],
                customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                overlayPlaceholder: "Год",
                overlayButton: "Применить",
                showAllDates: !0,
              },
              a = document.querySelector(".js-date-start"),
              r = document.querySelector(".js-date-end"),
              l = N()(
                a,
                se(
                  se({}, e),
                  {},
                  {
                    id: "map",
                    onSelect: function (e, a) {
                      t.filter.date_from = new Date(a).toLocaleDateString(
                        "ru-RU"
                      );
                    },
                  }
                )
              ),
              i = N()(
                r,
                se(
                  se({}, e),
                  {},
                  {
                    id: "map",
                    position: "br",
                    onSelect: function (e, a) {
                      t.filter.date_to = new Date(a).toLocaleDateString(
                        "ru-RU"
                      );
                    },
                  }
                )
              );
            l.getRange(), i.getRange();
          },
          toggleVisibleForm: function () {
            this.isOpened = !this.isOpened;
          },
          clearFilters: function () {
            this.filter = {
              region: null,
              type: null,
              status: null,
              price_from: null,
              price_to: null,
              date_from: null,
              date_to: null,
              owner: null,
            };
          },
        },
        mounted: function () {
          this.getFilterOptions(), Rt(this);
        },
      };
      function de(t, e, a, r, l, i, s) {
        try {
          var n = t[i](s),
            o = n.value;
        } catch (t) {
          return void a(t);
        }
        n.done ? e(o) : Promise.resolve(o).then(r, l);
      }
      var ue = {
          components: {
            MapFilter: Object(st.a)(ce, le, [], !1, null, null, null).exports,
            yandexMap: re.a,
            ymapMarker: re.b,
            Preloader: Qt,
          },
          mixins: [Jt],
          props: {
            blockId: {
              type: [String, Number],
              required: !0,
            },
            params: {
              type: Object,
            },
          },
          data: function () {
            return {
              settings: {
                apiKey: "e6256410-c18d-41f9-8bf2-1ee08776db74",
                lang: "ru_RU",
                coordorder: "latlong",
                enterprise: !1,
                version: "2.1",
              },
              clusterOptions: {
                deals: {
                  clusterHideIconOnBalloonOpen: !1,
                  clusterIcons: [
                    {
                      href: "/build/images/capital/cluster-icon.svg",
                      size: [42, 42],
                      offset: [-21, -21],
                    },
                  ],
                  clusterBalloonContentLayout: "balloonCarousel",
                  clusterBalloonLayout:
                    '\n            <div class="rt-balloon-cluster">\n              <div class="rt-balloon-cluster_container">\n                {% for geoObject in properties.geoObjects %}\n                  <div class="rt-balloon-cluster_item">\n                    <div class="rt-balloon-cluster_name">\n                      <a href="/deals/{{geoObject.properties.markerId}}"><span>{{ geoObject.properties.balloonContentHeader|raw }}</span></a>\n                    </div>\n                    <div class="rt-balloon-cluster_status">{{ geoObject.properties.balloonContentBody|raw }}</div>\n                    <div class="rt-balloon-cluster_price">{{ geoObject.properties.balloonContentFooter }} руб.</div>\n                  </div>\n                {% endfor %}\n              </div>\n            </div>\n          ',
                },
              },
              mapSettings: {
                coords: [54.844259, 40.179992],
                zoom: 5,
                controls: [],
                options: {
                  maxZoom: 16,
                },
              },
              markerSettings: {
                markerIcon: {
                  layout: "default#imageWithContent",
                  imageHref: "/build/images/capital/deals-pin.svg",
                  imageSize: [24, 30],
                  imageOffset: [-12, -30],
                  contentOffset: [-12, -30],
                },
                markerOptions: {
                  hideIconOnBalloonOpen: !1,
                },
              },
              deals: [],
              filters: [],
              isLoad: !1,
            };
          },
          methods: {
            updateDealsFilter: function (t) {
              (this.filters = t), (this.isLoad = !1), this.getDeals();
            },
            getDeals: function () {
              var t,
                e = this;
              return ((t = regeneratorRuntime.mark(function t() {
                var a, r;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (a = Et(e.filters)),
                          (t.next = 3),
                          Pt.a.get("/_ajax/deals/map?".concat(a))
                        );
                      case 3:
                        (r = t.sent), (e.deals = r.data), (e.isLoad = !0);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })),
              function () {
                var e = this,
                  a = arguments;
                return new Promise(function (r, l) {
                  var i = t.apply(e, a);
                  function s(t) {
                    de(i, r, l, s, n, "next", t);
                  }
                  function n(t) {
                    de(i, r, l, s, n, "throw", t);
                  }
                  s(void 0);
                });
              })();
            },
            balloonTemplate: function (t) {
              return '\n        <div class="rt-map-balloon" itemscope itemtype="https://schema.org/Product">\n          <div class="rt-map-balloon_row">\n            <div class="rt-map-balloon_image">\n              <img src="'
                .concat(
                  t.photo.main,
                  '" alt="" itemprop="image" >\n            </div>\n            <div class="rt-map-balloon_content">\n            <div class="rt-map-balloon_status">'
                )
                .concat(
                  t.bidStatus,
                  '</div>\n              <div class="rt-map-balloon_price" itemprop="offers" itemscope itemtype="https://schema.org/Offer"><span itemprop="price" content="'
                )
                .concat(this.formatPrice(t.price || t.startPrice), '">')
                .concat(
                  this.formatPrice(t.price || t.startPrice),
                  '</span> <span itemprop="priceCurrency" content="RUB">руб.</span></div>\n              <div class="rt-map-balloon_title">\n                <a href="/deals/'
                )
                .concat(t.id, '"><span itemprop="name">')
                .concat(
                  t.title,
                  '</span></a>\n              </div>\n              <div class="rt-map-balloon_param">\n                <div class="rt-map-balloon_paramName">Тип актива:</div>\n                <div class="rt-map-balloon_paramValue">'
                )
                .concat(
                  t.assetType,
                  '</div>\n              </div>\n              <div class="rt-map-balloon_param">\n                <div class="rt-map-balloon_paramName">Адрес:</div>\n                <div class="rt-map-balloon_paramValue">'
                )
                .concat(
                  t.address,
                  "</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      "
                );
            },
            mapLoaded: function (t) {
              this.dealsMap = t;
            },
            balloonOpen: function (t) {
              t.get("target").options.set({
                iconImageHref: "/build/images/capital/deals-pin-open.svg",
                iconImageSize: [30, 50],
                iconImageOffset: [-15, -50],
                iconContentOffset: [-15, -50],
              });
            },
            balloonClose: function (t) {
              t.get("target").options.set({
                iconImageHref: "/build/images/capital/deals-pin.svg",
                iconImageSize: [24, 30],
                iconImageOffset: [-12, -30],
                iconContentOffset: [-12, -30],
              });
            },
            hideBalloon: function () {
              this.dealsMap.balloon.close();
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.getDeals();
            });
          },
        },
        pe = Object(st.a)(ue, ae, [], !1, null, null, null).exports,
        fe = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "rt-deals-list_row",
            },
            [
              e(
                "div",
                {
                  staticClass: "rt-deals-list_col rt-deals-list_col-left",
                },
                [
                  e("CalendarColumnFilter", {
                    attrs: {
                      id: "calendar-col",
                      blockId: t.blockId,
                      params: t.params,
                      filterOptions: t.filterOptions,
                    },
                    on: {
                      "update-filter": t.updateDealsFilter,
                    },
                  }),
                ],
                1
              ),
              t._v(" "),
              e(
                "div",
                {
                  staticClass: "rt-deals-list_col rt-deals-list_col-right",
                },
                [
                  e("CalendarFilter", {
                    attrs: {
                      blockId: t.blockId,
                      params: t.params,
                      filterOptions: t.filterOptions,
                    },
                    on: {
                      "update-filter": t.updateDealsFilter,
                    },
                  }),
                  t._v(" "),
                  t.isFiltered
                    ? e(
                        "div",
                        {
                          staticClass: "rt-deals-calendar",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass: "rt-deals_list",
                            },
                            [
                              t._l(t.deals, function (a) {
                                return e(
                                  "div",
                                  {
                                    staticClass: "rt-calendar-cart",
                                    attrs: {
                                      itemscope: "",
                                      itemtype: "https://schema.org/Product",
                                    },
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass: "rt-calendar-cart_inner",
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "rt-calendar-cart_image",
                                          },
                                          [
                                            t._v("\n                <"),
                                            a.photo.main
                                              ? e("img", {
                                                  attrs: {
                                                    src: a.photo.main,
                                                    alt: "",
                                                    loading: "lazy",
                                                    itemprop: "image",
                                                  },
                                                })
                                              : a.photo.additional.length
                                              ? e("img", {
                                                  attrs: {
                                                    src: a.photo.additional[0],
                                                    alt: "",
                                                    loading: "lazy",
                                                    itemprop: "image",
                                                  },
                                                })
                                              : e("img", {
                                                  attrs: {
                                                    src: "/build/images/capital/no-image.jpeg",
                                                    alt: "",
                                                    loading: "lazy",
                                                    itemprop: "image",
                                                  },
                                                }),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "rt-calendar-cart_content",
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "rt-calendar-cart_price",
                                                attrs: {
                                                  itemprop: "offers",
                                                  itemscope: "",
                                                  itemtype:
                                                    "https://schema.org/Offer",
                                                },
                                              },
                                              [
                                                e(
                                                  "span",
                                                  {
                                                    attrs: {
                                                      itemprop: "price",
                                                      content: t.formatPrice(
                                                        a.price || a.startPrice
                                                      ),
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        t.formatPrice(
                                                          a.price ||
                                                            a.startPrice
                                                        )
                                                      )
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "span",
                                                  {
                                                    attrs: {
                                                      itemprop: "priceCurrency",
                                                      content: "RUB",
                                                    },
                                                  },
                                                  [t._v("руб.")]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "rt-calendar-cart_title",
                                              },
                                              [
                                                e(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: "/deals/".concat(
                                                        a.id
                                                      ),
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "span",
                                                      {
                                                        attrs: {
                                                          itemprop: "name",
                                                        },
                                                      },
                                                      [t._v(t._s(a.title))]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "rt-calendar-cart_params",
                                              },
                                              [
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "rt-calendar-cart_paramsLeft",
                                                  },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "rt-calendar-cart_param",
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-calendar-cart_paramName",
                                                          },
                                                          [t._v("Тип актива:")]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-calendar-cart_paramValue",
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(a.assetType)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "rt-calendar-cart_param",
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-calendar-cart_paramName",
                                                          },
                                                          [t._v("Регион:")]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-calendar-cart_paramValue",
                                                          },
                                                          [t._v(t._s(a.region))]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "rt-calendar-cart_param",
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-calendar-cart_paramName",
                                                          },
                                                          [t._v("Адрес:")]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-calendar-cart_paramValue",
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(a.address)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    a.area
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-calendar-cart_param",
                                                          },
                                                          [
                                                            t._m(0, !0),
                                                            t._v(" "),
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "rt-calendar-cart_paramValue",
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(a.area)
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                    t._v(" "),
                                                    a.landArea
                                                      ? e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-calendar-cart_param",
                                                          },
                                                          [
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "rt-calendar-cart_paramName",
                                                              },
                                                              [
                                                                t._v(
                                                                  "Площадь земельного участка, га:"
                                                                ),
                                                              ]
                                                            ),
                                                            t._v(" "),
                                                            e(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "rt-calendar-cart_paramValue",
                                                              },
                                                              [
                                                                t._v(
                                                                  t._s(
                                                                    a.landArea
                                                                  )
                                                                ),
                                                              ]
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "rt-deals-cart_paramsRight",
                                                  },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "rt-deals-cart_param",
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-deals-cart_paramName",
                                                          },
                                                          [
                                                            t._v(
                                                              "Начало приема заявок:"
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-deals-cart_paramValue",
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(a.dateFrom)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "rt-deals-cart_param",
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-deals-cart_paramName",
                                                          },
                                                          [
                                                            t._v(
                                                              "Окончание приема заявок:"
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-deals-cart_paramValue",
                                                          },
                                                          [t._v(t._s(a.dateTo))]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "rt-deals-cart_param",
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-deals-cart_paramName",
                                                          },
                                                          [t._v("Дата торгов:")]
                                                        ),
                                                        t._v(" "),
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-deals-cart_paramValue",
                                                          },
                                                          [
                                                            t._v(
                                                              t._s(a.bidDate)
                                                            ),
                                                          ]
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "rt-deals-cart_docs",
                                                      },
                                                      [
                                                        e(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rt-deals-cart_docName",
                                                          },
                                                          [
                                                            t._v(
                                                              "Документация по торгам"
                                                            ),
                                                          ]
                                                        ),
                                                        t._v(" "),
                                                        e("a", {
                                                          attrs: {
                                                            href: "/deals/".concat(
                                                              a.id,
                                                              "?docs-active=1#bidding_documentation"
                                                            ),
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "rt-calendar-cart_status",
                                          },
                                          [t._v(t._s(a.bidStatus))]
                                        ),
                                      ]
                                    ),
                                  ]
                                );
                              }),
                              t._v(" "),
                              t.totalDealsCount
                                ? t._e()
                                : e("div", [
                                    t._v("По запросу ничего не найдено"),
                                  ]),
                              t._v(" "),
                              t.isLoad
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-deals_loadMore",
                                      class: {
                                        hidden:
                                          t.deals.length >= t.totalDealsCount,
                                      },
                                      on: {
                                        click: t.loadMore,
                                      },
                                    },
                                    [t._v("Загрузить еще")]
                                  )
                                : e("Preloader"),
                            ],
                            2
                          ),
                        ]
                      )
                    : e("Preloader"),
                ],
                1
              ),
            ]
          );
        };
      fe._withStripped = !0;
      var me = function () {
        var t = this,
          e = t._self._c;
        return e(
          "div",
          {
            staticClass: "rt-calendar-filter rt-calendar-filter-right",
          },
          [
            t.isLoad
              ? e(
                  "form",
                  {
                    staticClass: "rt-calendar-filter_form",
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "rt-calendar-filter_formViewed",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "rt-calendar-filter_formRow",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass:
                                  "rt-calendar-filter_formField rt-form_field",
                              },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "rt-calendar-filter_label rt-form_label",
                                  },
                                  [t._v("Регион")]
                                ),
                                t._v(" "),
                                e("FilterSelect", {
                                  attrs: {
                                    options: t.filterOptions.region,
                                  },
                                  model: {
                                    value: t.filter.region,
                                    callback: function (e) {
                                      t.$set(t.filter, "region", e);
                                    },
                                    expression: "filter.region",
                                  },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass:
                                  "rt-calendar-filter_formField rt-form_field",
                              },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "rt-calendar-filter_label rt-form_label",
                                  },
                                  [t._v("Тип актива")]
                                ),
                                t._v(" "),
                                e("FilterSelect", {
                                  attrs: {
                                    options: t.filterOptions.assetType,
                                  },
                                  model: {
                                    value: t.filter.type,
                                    callback: function (e) {
                                      t.$set(t.filter, "type", e);
                                    },
                                    expression: "filter.type",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e("div", {
                          staticClass:
                            "rt-calendar-filter_formFilterBtn rt-toggle-collapse",
                          class: {
                            "is-opened": t.isOpened,
                          },
                          on: {
                            click: t.toggleVisibleForm,
                          },
                        }),
                      ]
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "rt-calendar-filter_formUnviewed rt-collapse",
                        class: {
                          "is-opened": t.isOpened,
                        },
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass: "rt-calendar-filter_formRow",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass:
                                  "rt-calendar-filter_formField rt-form_field",
                              },
                              [
                                t._m(0),
                                t._v(" "),
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "от",
                                  },
                                  model: {
                                    value: t.filter.area_from,
                                    callback: function (e) {
                                      t.$set(t.filter, "area_from", e);
                                    },
                                    expression: "filter.area_from",
                                  },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass:
                                  "rt-calendar-filter_formField rt-form_field",
                              },
                              [
                                e("div", {
                                  staticClass:
                                    "rt-calendar-filter_label rt-form_label",
                                }),
                                t._v(" "),
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "до",
                                  },
                                  model: {
                                    value: t.filter.area_to,
                                    callback: function (e) {
                                      t.$set(t.filter, "area_to", e);
                                    },
                                    expression: "filter.area_to",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "rt-calendar-filter_formRow",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass:
                                  "rt-calendar-filter_formField rt-form_field",
                              },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "rt-calendar-filter_label rt-form_label",
                                  },
                                  [t._v("Площадь земельного участка, га")]
                                ),
                                t._v(" "),
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "от",
                                  },
                                  model: {
                                    value: t.filter.land_area_from,
                                    callback: function (e) {
                                      t.$set(t.filter, "land_area_from", e);
                                    },
                                    expression: "filter.land_area_from",
                                  },
                                }),
                              ],
                              1
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass:
                                  "rt-calendar-filter_formField rt-form_field",
                              },
                              [
                                e("div", {
                                  staticClass:
                                    "rt-calendar-filter_label rt-form_label",
                                }),
                                t._v(" "),
                                e("FilterInput", {
                                  attrs: {
                                    type: "number",
                                    classes: "number",
                                    placeholder: "до",
                                  },
                                  model: {
                                    value: t.filter.land_area_to,
                                    callback: function (e) {
                                      t.$set(t.filter, "land_area_to", e);
                                    },
                                    expression: "filter.land_area_to",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass: "rt-calendar-filter_formRow",
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass:
                                  "rt-calendar-filter_formField full-w rt-form_field",
                              },
                              [
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "rt-calendar-filter_label rt-form_label",
                                  },
                                  [t._v("Собственник")]
                                ),
                                t._v(" "),
                                e("FilterInput", {
                                  attrs: {
                                    type: "text",
                                    placeholder: "Введите название компании",
                                  },
                                  model: {
                                    value: t.filter.owner,
                                    callback: function (e) {
                                      t.$set(t.filter, "owner", e);
                                    },
                                    expression: "filter.owner",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass:
                              "rt-calendar-filter_btn rt-calendar-filter_btn-clear",
                            on: {
                              click: t.clearFilters,
                            },
                          },
                          [t._v("Сбросить")]
                        ),
                      ]
                    ),
                  ]
                )
              : t._e(),
          ]
        );
      };
      me._withStripped = !0;
      var ve = {
          components: {
            FilterSelect: wt,
            FilterInput: Ot,
          },
          props: {
            blockId: {
              type: [String, Number],
              required: !0,
            },
            params: {
              type: Object,
            },
            filterOptions: {
              type: Object,
              required: !0,
            },
          },
          data: function () {
            return {
              filter: {
                region: null,
                type: null,
                area_from: null,
                area_to: null,
                land_area_from: null,
                land_area_to: null,
                owner: null,
              },
              isOpened: !1,
            };
          },
          computed: {
            isLoad: function () {
              return !!Object.keys(this.filterOptions).length;
            },
          },
          watch: {
            filter: {
              handler: function (t, e) {
                this.$emit("update-filter", t), Nt(this);
              },
              deep: !0,
            },
            isLoad: function () {
              var t = this;
              this.$nextTick(function () {
                Rt(t);
              });
            },
          },
          methods: {
            toggleVisibleForm: function () {
              this.isOpened = !this.isOpened;
            },
            clearFilters: function () {
              this.filter = {
                region: null,
                type: null,
                area_from: null,
                area_to: null,
                owner: null,
              };
            },
          },
          mounted: function () {
            Rt(this);
          },
        },
        _e = Object(st.a)(
          ve,
          me,
          [
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "rt-calendar-filter_label rt-form_label",
                },
                [this._v("Площадь помещения, м"), t("sup", [this._v("2")])]
              );
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        be = function () {
          var t = this,
            e = t._self._c;
          return t.isLoad
            ? e(
                "div",
                {
                  staticClass: "rt-calendar-filter",
                },
                [
                  e(
                    "div",
                    {
                      staticClass: "rt-calendar-filter_btn",
                      on: {
                        click: t.toggleFilterOnMobile,
                      },
                    },
                    [t._v("Фильтр")]
                  ),
                  t._v(" "),
                  e(
                    "form",
                    {
                      staticClass:
                        "rt-calendar-filter_form rt-form js-catalog-form",
                    },
                    [
                      e(
                        "div",
                        {
                          staticClass: "rt-calendar-filter_hidden",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-calendar-filter_field rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-calendar-filter_label rt-form_label",
                                },
                                [t._v("Регион")]
                              ),
                              t._v(" "),
                              e("FilterSelect", {
                                attrs: {
                                  options: t.filterOptions.region,
                                  searchable: !0,
                                },
                                model: {
                                  value: t.filter.region,
                                  callback: function (e) {
                                    t.$set(t.filter, "region", e);
                                  },
                                  expression: "filter.region",
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-calendar-filter_field rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-calendar-filter_label rt-form_label",
                                },
                                [t._v("Тип актива")]
                              ),
                              t._v(" "),
                              e("FilterSelect", {
                                attrs: {
                                  options: t.filterOptions.assetType,
                                },
                                model: {
                                  value: t.filter.type,
                                  callback: function (e) {
                                    t.$set(t.filter, "type", e);
                                  },
                                  expression: "filter.type",
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-calendar-filter_field rt-calendar-filter_field-square rt-form_field",
                            },
                            [
                              t._m(0),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "rt-form_row",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-form_col",
                                    },
                                    [
                                      e("FilterInput", {
                                        attrs: {
                                          type: "number",
                                          classes: "number",
                                          placeholder: "от",
                                        },
                                        model: {
                                          value: t.filter.area_from,
                                          callback: function (e) {
                                            t.$set(t.filter, "area_from", e);
                                          },
                                          expression: "filter.area_from",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-form_col",
                                    },
                                    [
                                      e("FilterInput", {
                                        attrs: {
                                          type: "number",
                                          classes: "number",
                                          placeholder: "до",
                                        },
                                        model: {
                                          value: t.filter.area_to,
                                          callback: function (e) {
                                            t.$set(t.filter, "area_to", e);
                                          },
                                          expression: "filter.area_to",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-calendar-filter_field rt-calendar-filter_field-square rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-calendar-filter_label rt-form_label",
                                },
                                [t._v("Площадь земельного участка, га")]
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "rt-form_row",
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-form_col",
                                    },
                                    [
                                      e("FilterInput", {
                                        attrs: {
                                          type: "number",
                                          classes: "number",
                                          placeholder: "от",
                                        },
                                        model: {
                                          value: t.filter.land_area_from,
                                          callback: function (e) {
                                            t.$set(
                                              t.filter,
                                              "land_area_from",
                                              e
                                            );
                                          },
                                          expression: "filter.land_area_from",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-form_col",
                                    },
                                    [
                                      e("FilterInput", {
                                        attrs: {
                                          type: "number",
                                          classes: "number",
                                          placeholder: "до",
                                        },
                                        model: {
                                          value: t.filter.land_area_to,
                                          callback: function (e) {
                                            t.$set(t.filter, "land_area_to", e);
                                          },
                                          expression: "filter.land_area_to",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-calendar-filter_field full-w rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-calendar-filter_label rt-form_label",
                                },
                                [t._v("Собственник")]
                              ),
                              t._v(" "),
                              e("FilterInput", {
                                attrs: {
                                  type: "text",
                                  placeholder: "Введите название компании",
                                },
                                model: {
                                  value: t.filter.owner,
                                  callback: function (e) {
                                    t.$set(t.filter, "owner", e);
                                  },
                                  expression: "filter.owner",
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass: "rt-calendar-filter_visible",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-catalog-filter_field rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-catalog-filter_label rt-form_label",
                                },
                                [t._v("Сортировка")]
                              ),
                              t._v(" "),
                              e("FilterSelect", {
                                attrs: {
                                  options: t.filterOptions.sort,
                                },
                                model: {
                                  value: t.filter.sort,
                                  callback: function (e) {
                                    t.$set(t.filter, "sort", e);
                                  },
                                  expression: "filter.sort",
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-catalog-filter_field rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-catalog-filter_label rt-form_label",
                                },
                                [t._v("Выберите дату фильтрации")]
                              ),
                              t._v(" "),
                              e("FilterSelect", {
                                attrs: {
                                  options: t.filterOptions.filtering_date,
                                },
                                model: {
                                  value: t.filter.filtering_date,
                                  callback: function (e) {
                                    t.$set(t.filter, "filtering_date", e);
                                  },
                                  expression: "filter.filtering_date",
                                },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-calendar-filter_field rt-form_field",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "rt-calendar-filter_label rt-form_label",
                                },
                                [t._v("Выбрать период")]
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticClass: "rt-form_row js-date-range",
                                  attrs: {
                                    "data-type": "calendar",
                                  },
                                },
                                [
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-form_col",
                                    },
                                    [
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.filter.date_from,
                                            expression: "filter.date_from",
                                          },
                                        ],
                                        staticClass: "date js-date-start date",
                                        attrs: {
                                          type: "text",
                                          placeholder: "с",
                                        },
                                        domProps: {
                                          value: t.filter.date_from,
                                        },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.filter,
                                                "date_from",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass: "rt-form_col",
                                    },
                                    [
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.filter.date_to,
                                            expression: "filter.date_to",
                                          },
                                        ],
                                        staticClass: "date js-date-end",
                                        attrs: {
                                          type: "text",
                                          placeholder: "по",
                                        },
                                        domProps: {
                                          value: t.filter.date_to,
                                        },
                                        on: {
                                          input: function (e) {
                                            e.target.composing ||
                                              t.$set(
                                                t.filter,
                                                "date_to",
                                                e.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-calendar-filter_field rt-form_field",
                            },
                            [
                              e("CalendarPanel", {
                                attrs: {
                                  "get-classes": t.getClasses,
                                  value: t.innerValue,
                                  lang: t.lang,
                                },
                                on: {
                                  select: t.handleSelect,
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                      t._v(" "),
                      e(
                        "div",
                        {
                          staticClass:
                            "rt-calendar-filter_field full-w rt-form_field",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass:
                                "rt-calendar-filter_btn rt-calendar-filter_btn-clear",
                              on: {
                                click: t.clearFilters,
                              },
                            },
                            [t._v("Сбросить")]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              )
            : t._e();
        };
      be._withStripped = !0;
      var he = a("7EX9");
      a("EHp8");
      function ge(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var a =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null == a) return;
            var r,
              l,
              i = [],
              s = !0,
              n = !1;
            try {
              for (
                a = a.call(t);
                !(s = (r = a.next()).done) &&
                (i.push(r.value), !e || i.length !== e);
                s = !0
              );
            } catch (t) {
              (n = !0), (l = t);
            } finally {
              try {
                s || null == a.return || a.return();
              } finally {
                if (n) throw l;
              }
            }
            return i;
          })(t, e) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return ye(t, e);
            var a = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === a && t.constructor && (a = t.constructor.name);
            if ("Map" === a || "Set" === a) return Array.from(t);
            if (
              "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return ye(t, e);
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ye(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var a = 0, r = new Array(e); a < e; a++) r[a] = t[a];
        return r;
      }
      function Ce(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function we(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ce(Object(a), !0).forEach(function (e) {
                je(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : Ce(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function je(t, e, a) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      var Se = {
          components: {
            FilterInput: Ot,
            FilterSelect: wt,
            CalendarPanel: he.default.CalendarPanel,
          },
          mixins: [ht],
          props: {
            blockId: {
              type: [String, Number],
              required: !0,
            },
            params: {
              type: Object,
            },
            filterOptions: {
              type: Object,
              required: !0,
            },
          },
          data: function () {
            return {
              filter: {
                region: null,
                type: null,
                administrative_type: null,
                area_from: null,
                area_to: null,
                land_area_from: null,
                land_area_to: null,
                owner: null,
                date_from: null,
                date_to: null,
              },
              innerValue: [],
              lang: {
                formatLocale: {
                  firstDayOfWeek: 1,
                },
              },
            };
          },
          computed: {
            isLoad: function () {
              return !!Object.keys(this.filterOptions).length;
            },
          },
          watch: {
            filter: {
              handler: function (t) {
                this.$emit("update-filter", t), Nt(this);
              },
              deep: !0,
            },
            isLoad: function () {
              var t = this;
              this.$nextTick(function () {
                Rt(t), t.initDatepickerRange();
              });
            },
          },
          methods: {
            initDatepickerRange: function () {
              var t = this,
                e = {
                  startDay: 1,
                  formatter: function (t, e, a) {
                    var r = e.toLocaleDateString("ru-RU");
                    t.value = r;
                  },
                  customMonths: [
                    "Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь",
                  ],
                  customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                  overlayPlaceholder: "Год",
                  overlayButton: "Применить",
                  showAllDates: !0,
                },
                a = document.querySelector(".js-date-start"),
                r = document.querySelector(".js-date-end"),
                l = N()(
                  a,
                  we(
                    we({}, e),
                    {},
                    {
                      id: "calendar",
                      onSelect: function (e, a) {
                        (t.filter.date_from = new Date(a).toLocaleDateString(
                          "ru-RU"
                        )),
                          t.handleSelect(a);
                      },
                    }
                  )
                ),
                i = N()(
                  r,
                  we(
                    we({}, e),
                    {},
                    {
                      id: "calendar",
                      position: "br",
                      onSelect: function (e, a) {
                        (t.filter.date_to = new Date(a).toLocaleDateString(
                          "ru-RU"
                        )),
                          t.handleSelect(a);
                      },
                    }
                  )
                );
              l.getRange(), i.getRange();
            },
            getClasses: function (t, e, a) {
              return !/disabled|active|not-current-month/.test(a) &&
                2 === e.length &&
                t.getTime() > e[0].getTime() &&
                t.getTime() < e[1].getTime()
                ? "in-range"
                : "";
            },
            handleSelect: function (t) {
              var e = ge(this.innerValue, 2),
                a = e[0],
                r = e[1];
              this.isValidDate(a) && !this.isValidDate(r)
                ? (a.getTime() > t.getTime()
                    ? ((this.innerValue = [t, a]),
                      (this.filter.date_from = new Date(t).toLocaleDateString(
                        "ru-Ru"
                      )))
                    : ((this.innerValue = [a, t]),
                      (this.filter.date_from = new Date(a).toLocaleDateString(
                        "ru-Ru"
                      )),
                      (this.filter.date_to = new Date(t).toLocaleDateString(
                        "ru-Ru"
                      ))),
                  (this.value = this.innerValue),
                  (this.filter.date_from = new Date(
                    this.innerValue[0]
                  ).toLocaleDateString("ru-Ru")),
                  (this.filter.date_to = new Date(
                    this.innerValue[1]
                  ).toLocaleDateString("ru-Ru")))
                : ((this.innerValue = [t, new Date(NaN)]),
                  (this.filter.date_from = new Date(t).toLocaleDateString(
                    "ru-Ru"
                  )));
            },
            isValidDate: function (t) {
              return t instanceof Date && !isNaN(t);
            },
            clearFilters: function () {
              (this.filter = {
                region: null,
                type: null,
                administrative_type: null,
                area_from: null,
                area_to: null,
                owner: null,
                date_from: null,
                date_to: null,
              }),
                (this.innerValue = []);
            },
          },
          mounted: function () {
            Rt(this);
          },
        },
        Oe = {
          components: {
            CalendarFilter: _e,
            CalendarColumnFilter: Object(st.a)(
              Se,
              be,
              [
                function () {
                  var t = this._self._c;
                  return t(
                    "div",
                    {
                      staticClass: "rt-calendar-filter_label rt-form_label",
                    },
                    [this._v("Площадь помещения, м"), t("sup", [this._v("2")])]
                  );
                },
              ],
              !1,
              null,
              null,
              null
            ).exports,
            Preloader: Qt,
          },
          mixins: [Jt],
          props: {
            blockId: {
              type: [String, Number],
              required: !0,
            },
            params: {
              type: Object,
            },
          },
          data: function () {
            return {
              currentPage: 0,
              deals: [],
              totalDealsCount: null,
              filters: [],
              isLoad: !1,
              totalPages: null,
              isFiltered: !1,
              isCalendar: !0,
              filterOptions: {},
            };
          },
          methods: {
            updateDealsFilter: function (t) {
              (this.filters = t),
                (this.isFiltered = !1),
                (this.currentPage = 0),
                (this.deals = []),
                this.getCalendarDeals();
            },
            getCalendarDeals: function () {
              Vt(this);
            },
            loadMore: function () {
              (this.isLoad = !1), this.getCalendarDeals();
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.getCalendarDeals();
            });
          },
        },
        ke = Object(st.a)(
          Oe,
          fe,
          [
            function () {
              var t = this._self._c;
              return t(
                "div",
                {
                  staticClass: "rt-calendar-cart_paramName",
                },
                [
                  this._v("Площадь помещения, м"),
                  t("sup", [this._v("2")]),
                  this._v(":"),
                ]
              );
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        Pe = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "rt-deals-list_row",
            },
            [
              e(
                "div",
                {
                  staticClass: "rt-deals-list_col rt-deals-list_col-left",
                },
                [
                  e("DealsFilter", {
                    attrs: {
                      id: "archive",
                      blockId: t.blockId,
                      params: t.params,
                      filterOptions: t.filterOptions,
                    },
                    on: {
                      "update-filter": t.updateDealsFilter,
                    },
                  }),
                ],
                1
              ),
              t._v(" "),
              e(
                "div",
                {
                  staticClass: "rt-deals-list_col rt-deals-list_col-right",
                },
                [
                  t.isFiltered
                    ? e(
                        "div",
                        {
                          staticClass: "rt-deals",
                        },
                        [
                          e(
                            "div",
                            {
                              staticClass: "rt-deals_list",
                            },
                            [
                              t._l(t.deals, function (t) {
                                return e("DealCard", {
                                  key: t.id,
                                  attrs: {
                                    deal: t,
                                  },
                                });
                              }),
                              t._v(" "),
                              t.totalDealsCount
                                ? t._e()
                                : e("div", [
                                    t._v("По запросу ничего не найдено"),
                                  ]),
                              t._v(" "),
                              t.isLoad
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-deals_loadMore",
                                      class: {
                                        hidden:
                                          t.deals.length >= t.totalDealsCount,
                                      },
                                      on: {
                                        click: t.loadMore,
                                      },
                                    },
                                    [t._v("Загрузить еще")]
                                  )
                                : e("Preloader"),
                            ],
                            2
                          ),
                        ]
                      )
                    : e("Preloader"),
                ],
                1
              ),
            ]
          );
        };
      Pe._withStripped = !0;
      var xe = {
          components: {
            DealsFilter: Xt,
            DealCard: Yt,
            Preloader: Qt,
          },
          props: {
            blockId: {
              type: [String, Number],
              required: !0,
            },
            params: {
              type: Object,
            },
          },
          data: function () {
            return {
              currentPage: 0,
              deals: [],
              totalDealsCount: null,
              isLoad: !1,
              filters: [],
              totalPages: null,
              isFiltered: !1,
              isArchive: !0,
              filterOptions: {},
            };
          },
          methods: {
            updateDealsFilter: function (t) {
              (this.filters = t),
                (this.isFiltered = !1),
                (this.currentPage = 0),
                (this.deals = []),
                this.getArchiveDeals();
            },
            getArchiveDeals: function () {
              Vt(this);
            },
            loadMore: function () {
              (this.isLoad = !1), this.getArchiveDeals();
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.getArchiveDeals();
            });
          },
        },
        De = Object(st.a)(xe, Pe, [], !1, null, null, null).exports,
        Le = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "rt-deals-list_row",
            },
            [
              e(
                "div",
                {
                  staticClass: "rt-deals-list_col rt-deals-list_col-left",
                },
                [
                  e("DealsFilter", {
                    attrs: {
                      id: "announce",
                      blockId: t.blockId,
                      params: t.params,
                      filterOptions: t.filterOptions,
                    },
                    on: {
                      "update-filter": t.updateDealsFilter,
                    },
                  }),
                ],
                1
              ),
              t._v(" "),
              e(
                "div",
                {
                  staticClass: "rt-deals-list_col rt-deals-list_col-right",
                },
                [
                  t.isFiltered
                    ? e(
                        "div",
                        {
                          staticClass: "rt-deals",
                        },
                        [
                          e("div", {
                            staticClass: "rt-deals_sort",
                          }),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass: "rt-deals_list",
                            },
                            [
                              t._l(t.deals, function (t) {
                                return e("DealCard", {
                                  key: t.id,
                                  attrs: {
                                    deal: t,
                                  },
                                });
                              }),
                              t._v(" "),
                              t.totalDealsCount
                                ? t._e()
                                : e("div", [
                                    t._v("По запросу ничего не найдено"),
                                  ]),
                              t._v(" "),
                              t.isLoad
                                ? e(
                                    "div",
                                    {
                                      staticClass: "rt-deals_loadMore",
                                      class: {
                                        hidden:
                                          t.deals.length >= t.totalDealsCount,
                                      },
                                      on: {
                                        click: t.loadMore,
                                      },
                                    },
                                    [t._v("Загрузить еще")]
                                  )
                                : e("Preloader"),
                            ],
                            2
                          ),
                        ]
                      )
                    : e("Preloader"),
                ],
                1
              ),
            ]
          );
        };
      Le._withStripped = !0;
      var qe = {
          components: {
            DealsFilter: Xt,
            DealCard: Yt,
            Preloader: Qt,
          },
          props: {
            blockId: {
              type: [String, Number],
              required: !0,
            },
            params: {
              type: Object,
            },
          },
          data: function () {
            return {
              currentPage: 0,
              deals: [],
              totalDealsCount: null,
              isLoad: !1,
              filters: [],
              totalPages: null,
              isFiltered: !1,
              isPreview: !0,
              filterOptions: {},
            };
          },
          methods: {
            updateDealsFilter: function (t) {
              (this.filters = t),
                (this.isFiltered = !1),
                (this.currentPage = 0),
                (this.deals = []),
                this.getPreviewDeals();
            },
            getPreviewDeals: function () {
              Vt(this);
            },
            loadMore: function () {
              (this.isLoad = !1), this.getPreviewDeals();
            },
          },
          mounted: function () {
            var t = this;
            this.$nextTick(function () {
              t.getPreviewDeals();
            });
          },
        },
        Fe = Object(st.a)(qe, Le, [], !1, null, null, null).exports;
      function Ie(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            a.push.apply(a, r);
        }
        return a;
      }
      function $e(t) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ie(Object(a), !0).forEach(function (e) {
                Ae(t, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : Ie(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return t;
      }
      function Ae(t, e, a) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = a),
          t
        );
      }
      function Ee(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var a =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null == a) return;
            var r,
              l,
              i = [],
              s = !0,
              n = !1;
            try {
              for (
                a = a.call(t);
                !(s = (r = a.next()).done) &&
                (i.push(r.value), !e || i.length !== e);
                s = !0
              );
            } catch (t) {
              (n = !0), (l = t);
            } finally {
              try {
                s || null == a.return || a.return();
              } finally {
                if (n) throw l;
              }
            }
            return i;
          })(t, e) ||
          Ve(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ve(t, e) {
        if (t) {
          if ("string" == typeof t) return Me(t, e);
          var a = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === a && t.constructor && (a = t.constructor.name),
            "Map" === a || "Set" === a
              ? Array.from(t)
              : "Arguments" === a ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
              ? Me(t, e)
              : void 0
          );
        }
      }
      function Me(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var a = 0, r = new Array(e); a < e; a++) r[a] = t[a];
        return r;
      }
      var Be = {
          components: {
            CatalogIcon: nt,
            MapIcon: ct,
            CalendarIcon: ut,
            ArchiveIcon: ft,
            AnnounceIcon: vt,
            Catalog: ee,
            Map: pe,
            Calendar: ke,
            Archive: De,
            Announce: Fe,
          },
          props: {
            blockId: {
              type: [String, Number],
              required: !0,
            },
            pageSlug: {
              type: String,
              default: "",
            },
            filterData: {
              type: Object,
              default: function () {},
            },
          },
          data: function () {
            return {
              tabsList: [
                {
                  title: "Каталог активов",
                  icon: nt,
                  component: "Catalog",
                },
                {
                  title: "Карта торгов",
                  icon: ct,
                  component: "Map",
                },
                {
                  title: "Календарь торгов",
                  icon: ut,
                  component: "Calendar",
                },
                {
                  title: "Архив активов",
                  icon: ft,
                  component: "Archive",
                },
                {
                  title: "Анонс",
                  icon: vt,
                  component: "Announce",
                },
              ],
              activeComponent: "Catalog",
              params: {},
              tabsParamsMap: {
                Map: "map",
                Calendar: "calendar",
                Archive: "archive",
                Announce: "preview",
              },
            };
          },
          methods: {
            toggleActiveTab: function (t) {
              (this.activeComponent = t), this.setUrlParam();
            },
            getSearchParams: function () {
              var t,
                e = window.location.search.substring(1),
                a = (function (t, e) {
                  var a =
                    ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
                  if (!a) {
                    if (
                      Array.isArray(t) ||
                      (a = Ve(t)) ||
                      (e && t && "number" == typeof t.length)
                    ) {
                      a && (t = a);
                      var r = 0,
                        l = function () {};
                      return {
                        s: l,
                        n: function () {
                          return r >= t.length
                            ? {
                                done: !0,
                              }
                            : {
                                done: !1,
                                value: t[r++],
                              };
                        },
                        e: function (t) {
                          throw t;
                        },
                        f: l,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var i,
                    s = !0,
                    n = !1;
                  return {
                    s: function () {
                      a = a.call(t);
                    },
                    n: function () {
                      var t = a.next();
                      return (s = t.done), t;
                    },
                    e: function (t) {
                      (n = !0), (i = t);
                    },
                    f: function () {
                      try {
                        s || null == a.return || a.return();
                      } finally {
                        if (n) throw i;
                      }
                    },
                  };
                })(new URLSearchParams(e).entries());
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var r = Ee(t.value, 2),
                    l = r[0],
                    i = r[1];
                  if (
                    "map" === l ||
                    "calendar" === l ||
                    "archive" === l ||
                    "preview" === l
                  )
                    return;
                  var s = l.replace("filter[", "").slice(0, -1);
                  this.params = $e($e({}, this.params), {}, Ae({}, s, i));
                }
              } catch (t) {
                a.e(t);
              } finally {
                a.f();
              }
            },
            setUrlParam: function () {
              var t = new URL(window.location.href),
                e = new URLSearchParams(t.search);
              for (var a in this.tabsParamsMap) e.delete(this.tabsParamsMap[a]);
              void 0 !== this.tabsParamsMap[this.activeComponent] &&
                e.set(this.tabsParamsMap[this.activeComponent], "1"),
                e.forEach(function (t, a) {
                  a.startsWith("filter[") && e.delete(a);
                }),
                (t.search = e.toString()),
                window.history.pushState({}, document.title, t.toString());
            },
          },
          created: function () {
            this.getSearchParams();
            var t = window.location.search.substring(1),
              e = new URLSearchParams(t);
            e.get("calendar")
              ? (this.activeComponent = "Calendar")
              : e.get("archive")
              ? (this.activeComponent = "Archive")
              : e.get("preview")
              ? (this.activeComponent = "Announce")
              : e.get("map") && (this.activeComponent = "Map"),
              this.setUrlParam();
          },
          mounted: function () {
            this.pageSlug &&
              (this.params = $e($e({}, this.params), this.filterData));
          },
        },
        Re = Object(st.a)(Be, lt, [], !1, null, null, null).exports;
      document.getElementById("deals-vue") &&
        new rt.a({
          render: function (t) {
            return t(Re, {
              props: {
                blockId: this.$el.attributes["data-block-id"].value,
                pageSlug: this.$el.attributes["data-slug"].value,
                filterData: JSON.parse(
                  this.$el.attributes["data-filter-data"].value
                ),
              },
            });
          },
        }).$mount("#deals-vue");
    },
  },
  [["UB33", "runtime", 0]],
]);
