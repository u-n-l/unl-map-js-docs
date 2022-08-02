/* eslint-disable */
"use strict";

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var React = _interopDefault(require("react"));
var PropTypes = _interopDefault(require("prop-types"));
var Helmet = require("react-helmet");
var Helmet__default = _interopDefault(Helmet);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function BrowserCompatibilityWarning() {
  return React.createElement(
    "div",
    {
      className: "shell-wrapper",
      id: "page-shell-compatibility-warning",
      style: {
        display: "none",
      },
      "data-swiftype-index": "false",
    },
    React.createElement(
      "div",
      {
        className:
          "shell-py12 shell-px24 shell-bg-pink shell-color-white shell-align-l",
      },
      React.createElement(
        "button",
        {
          className: "shell-absolute shell-top shell-right shell-p12",
          id: "page-shell-compatibility-dismiss",
        },
        React.createElement(
          "svg",
          {
            className: "shell-icon",
            viewBox: "0 0 18 18",
          },
          React.createElement("path", {
            d: "M5.8,5C5.4,5,5,5.4,5,5.8C5,6,5.1,6.2,5.3,6.3l0,0L7.9,9l-2.6,2.6C5.1,11.8,5,12,5,12.2C5,12.6,5.4,13,5.8,13 c0.2,0,0.4-0.1,0.6-0.3L9,10.1l2.6,2.6c0.1,0.2,0.4,0.3,0.6,0.3c0.4,0,0.8-0.4,0.8-0.8c0-0.2-0.1-0.4-0.2-0.6L10.1,9l2.6-2.7 C12.9,6.2,13,6,13,5.8C13,5.4,12.6,5,12.2,5c-0.2,0-0.4,0.1-0.6,0.2L9,7.8L6.4,5.2C6.2,5.1,6,5,5.8,5L5.8,5z",
          })
        )
      ),
      React.createElement(
        "div",
        {
          className: "limiter shell-block shell-relative",
        },
        React.createElement(
          "div",
          {
            className:
              "compatibility-warning-copy shell-mb6 shell-mb0-mm shell-align-center shell-align-l-mm shell-txt-bold",
          },
          "You are using an outdated browser and will encounter some problems with our website. Please consider upgrading."
        ),
        React.createElement(
          "div",
          {
            className: "compatibility-warning-action shell-align-center",
          },
          React.createElement(
            "a",
            {
              className:
                "shell-btn shell-btn--white shell-color-pink shell-txt-nowrap",
              href: "http://outdatedbrowser.com",
            },
            "Upgrade Now"
          )
        )
      )
    )
  );
}

function PageHelmet() {
  return React.createElement(
    Helmet.Helmet,
    null,
    React.createElement("meta", {
      charSet: "utf-8",
    }),
    React.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    }),
    React.createElement("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/unl-map-js-docs/assets/favicon/apple-touch-icon.png?v=rMBbQAR5BL",
    }),
    React.createElement("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/unl-map-js-docs/assets/favicon/favicon-32x32.png?v=rMBbQAR5BL",
    }),
    React.createElement("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/unl-map-js-docs/assets/favicon/favicon-16x16.png?v=rMBbQAR5BL",
    }),
    React.createElement("link", {
      rel: "manifest",
      href: "/unl-map-js-docs/assets/favicon/site.webmanifest?v=rMBbQAR5BL",
    }),
    React.createElement("link", {
      rel: "mask-icon",
      href: "/unl-map-js-docs/assets/favicon/safari-pinned-tab.svg?v=rMBbQAR5BL",
      color: "#4264fb",
    }),
    React.createElement("link", {
      rel: "shortcut icon",
      href: "/unl-map-js-docs/assets/favicon/favicon.ico?v=rMBbQAR5BL",
    }),
    React.createElement("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff",
    }),
    React.createElement("meta", {
      name: "msapplication-config",
      content: "/unl-map-js-docs/assets/favicon/browserconfig.xml?v=rMBbQAR5BL",
    }),
    React.createElement("meta", {
      name: "theme-color",
      content: "#ffffff",
    }),
    React.createElement("meta", {
      name: "twitter:site",
      content: "@MapLibre",
    }),
    React.createElement("meta", {
      property: "og:site_name",
      content: "UNL",
    })
  );
}

var shellStyles = {
  // Header names
  headerMenuName:
    "shell-txt-s shell-txt-s-mxl shell-txt-bold shell-txt-nowrap shell-py6",
  // Medium to X-large navigation
  navigationItem: "shell-mx6 shell-mx9-ml shell-mx18-mxl",
  // User menu popup
  userNavLink:
    "shell-color-gray-dark shell-color-blue-on-hover shell-txt-s shell-txt-bold shell-my12 shell-block",
  userAvatar:
    "shell-border shell-border--2 shell-border--white shell-h30 shell-w30 shell-bg-darken25 shell-clip shell-round-full",
};

function NavigationItem(props) {
  var colorBasedClasses = props.darkText
    ? "shell-navigation-menu-button shell-color-gray-dark shell-color-blue-on-hover"
    : "shell-navigation-menu-button shell-link shell-link--white";
  return React.createElement(
    "div",
    {
      className: "shell-flex-child ".concat(shellStyles.navigationItem),
      style: {
        lineHeight: 1,
      },
    },
    React.createElement(
      "a",
      {
        className: "shell-py6 shell-txt-s shell-txt-bold ".concat(
          colorBasedClasses
        ),
        href: props.href,
      },
      props.children
    )
  );
}

NavigationItem.propTypes = {
  darkText: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

function MobileMenuButton(props) {
  var menuButtonClasses = "shell-block";

  if (!props.darkText) {
    menuButtonClasses += " shell-link shell-link--white";
  } else {
    menuButtonClasses += " shell-color-blue";
  }

  return React.createElement(
    "button",
    {
      id: "mobile-nav-trigger-toggle",
      "aria-label": "Toggle navigation",
      className: menuButtonClasses,
      "data-test": "mobile-nav-trigger-toggle",
    },
    React.createElement(
      "svg",
      {
        id: "mobile-nav-trigger-menu",
        viewBox: "0 0 18 18",
        className:
          "shell-mobile-nav__trigger shell-icon shell-transition shell-icon--l",
      },
      React.createElement(
        "g",
        null,
        React.createElement("path", {
          className: "shell-mobile-nav__trigger__bar--top",
          d: "M4.2,6h9.6C14.5,6,15,5.6,15,5s-0.5-1-1.2-1H4.2C3.5,4,3,4.4,3,5S3.5,6,4.2,6z",
        }),
        React.createElement("path", {
          className: "shell-mobile-nav__trigger__bar--middle",
          d: "M13.8,8H4.2C3.5,8,3,8.4,3,9s0.5,1,1.2,1h9.6c0.7,0,1.2-0.4,1.2-1S14.5,8,13.8,8z",
        }),
        React.createElement("path", {
          className: "shell-mobile-nav__trigger__bar--bottom",
          d: "M13.8,12H4.2C3.5,12,3,12.4,3,13s0.5,1,1.2,1h9.6c0.7,0,1.2-0.4,1.2-1S14.5,12,13.8,12z",
        })
      )
    )
  );
}

MobileMenuButton.propTypes = {
  darkText: PropTypes.bool,
};

var language = "en";
var logoSiteTitle = "Docs";
var all = "UNL";
var nav = [];
var navigationMenuData = {
  language: language,
  logoSiteTitle: logoSiteTitle,
  all: all,
  nav: nav,
};

var ORIGIN_DOCS_PRODUCTION = "https://u-n-l.github.io/unl-map-js-docs";
var DEFAULT_SOCIAL_IMAGE_URL =
  "https://static-assets.mapbox.com/branding/social/social-1200x630.v1.png";
var DEFAULT_SOCIAL_IMAGE_THUMBNAIL_URL =
  "https://static-assets.mapbox.com/branding/social/social-120x120.v1.png";

var MOBILE_HEADER_HEIGHT = 72;

function MobileNavigation() {
  return React.createElement(
    "div",
    {
      className:
        "shell-z1 shell-absolute shell-top shell-left shell-right shell-w-full",
    },
    React.createElement("div", {
      id: "mobile-nav-backdrop",
      "data-test": "mobile-nav-backdrop",
      className:
        "shell-absolute shell-bottom shell-left shell-right shell-mobile-nav__backdrop",
      style: {
        top: MOBILE_HEADER_HEIGHT,
        backgroundImage:
          "linear-gradient(to bottom, transparent, rgba(31, 51, 73, .5))",
      },
    }),
    React.createElement(
      "div",
      {
        id: "mobile-nav-menu",
        "data-test": "mobile-nav-menu",
        className: "shell-absolute shell-z5 shell-w-full shell-animated-menu",
        style: {
          top: 0,
          right: 0,
        },
      },
      React.createElement(
        "div",
        {
          className:
            "shell-shadow-darken10-bold shell-bg-white shell-clip shell-px24",
          style: {
            paddingTop: MOBILE_HEADER_HEIGHT,
          },
        },
        React.createElement(
          "div",
          {
            className: "shell-pb24",
          },
          navigationMenuData.nav.map(function (nav$$1) {
            return React.createElement(
              "a",
              {
                key: nav$$1.href,
                href: nav$$1.href,
                className: "block shell-py6",
              },
              nav$$1.title
            );
          })
        ),
        React.createElement(
          "div",
          {
            className: "shell-border-t shell-border--gray-light shell-py24",
          },
          React.createElement(
            "a",
            {
              href: ORIGIN_DOCS_PRODUCTION,
              className: "shell-color-blue",
            },
            navigationMenuData.all
          )
        )
      )
    )
  );
}

var USER_MENU_WIDTH = 66;

function PageHeader(props) {
  var logoOverlay = null;

  if (!props.darkText) {
    logoOverlay = React.createElement("div", {
      className:
        "shell-mobile-nav__logo--overlay shell-absolute shell-top shell-left",
    });
  }

  return React.createElement(
    "header",
    {
      className: "shell-absolute shell-w-full shell-z1",
      "data-swiftype-index": "false",
    },
    React.createElement(
      "div",
      {
        className:
          "shell-none limiter limiter--wide shell-mt24 shell-flex-parent-mm shell-flex-parent--center-cross",
      },
      React.createElement(
        "div",
        {
          className:
            "shell-flex-child shell-flex-child--grow shell-flex-parent shell-flex-parent--center-cross shell-flex-parent--end-main",
        },
        React.createElement(
          "div",
          {
            className:
              "shell-flex-parent shell-flex-parent--center-cross shell-flex-parent--end-main",
          },
          navigationMenuData.nav.map(function (nav$$1) {
            return React.createElement(
              NavigationItem,
              {
                key: nav$$1.href,
                href: nav$$1.href,
                darkText: props.darkText,
              },
              nav$$1.title
            );
          })
        )
      ),
      React.createElement("div", {
        className: "shell-flex-child shell-ml6 shell-ml12-ml shell-ml18-mxl",
      })
    ),
    React.createElement(
      "div",
      {
        id: "page-header-content",
        className: "shell-none-mm limiter shell-py12 shell-z2 shell-relative",
      },
      React.createElement(
        "div",
        {
          className: "shell-flex-parent shell-flex-parent--center-cross",
        },
        React.createElement(
          "div",
          {
            className:
              "shell-flex-child shell-flex-child--no-shrink shell-ml-neg6",
          },
          React.createElement(MobileMenuButton, {
            darkText: props.darkText,
          })
        ),
        React.createElement(
          "div",
          {
            className:
              "shell-flex-child shell-flex-child--grow shell-relative shell-mb-logo__wrapper shell-ml12",
          },
          logoOverlay
        ),
        React.createElement("div", {
          className: "shell-flex-child shell-flex-child--no-shrink",
        })
      )
    ),
    React.createElement(MobileNavigation, null)
  );
}

PageHeader.propTypes = {
  darkText: PropTypes.bool,
};
PageHeader.defaultProps = {
  darkText: false,
};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")
    ? x.default
    : x;
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var titleGenerator_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  exports.titleGenerator = titleGenerator;
  var contextlessTitles = ["Introduction", "Overview", "Guides"];

  function titleGenerator(title, subsite, site) {
    // create array for formatted title: {title} | {subsite} | {site}
    var titleArr = []; // do not push a title that is "Introduction" or "Overview"

    if (
      title &&
      contextlessTitles.indexOf(title) === -1 && // do not push a title that lacks context
      (subsite || site)
    )
      titleArr.push(title); // push subsite, if same value doesn't exist yet, strip "for (Product)" from name

    if (subsite && titleArr.indexOf(subsite) === -1)
      titleArr.push(subsite.replace(/\sfor\s(iOS|Android|Vision|Unity)/, "")); // push site, if same value doesn't exist yet

    if (site && titleArr.indexOf(site) === -1) titleArr.push(site);
    return titleArr;
  }
});

unwrapExports(titleGenerator_1);
var titleGenerator_2 = titleGenerator_1.titleGenerator;

var removeMarkdown = function (md, options) {
  options = options || {};
  options.listUnicodeChar = options.hasOwnProperty("listUnicodeChar")
    ? options.listUnicodeChar
    : false;
  options.stripListLeaders = options.hasOwnProperty("stripListLeaders")
    ? options.stripListLeaders
    : true;
  options.gfm = options.hasOwnProperty("gfm") ? options.gfm : true;
  options.useImgAltText = options.hasOwnProperty("useImgAltText")
    ? options.useImgAltText
    : true;
  var output = md || ""; // Remove horizontal rules (stripListHeaders conflict with this rule, which is why it has been moved to the top)

  output = output.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");

  try {
    if (options.stripListLeaders) {
      if (options.listUnicodeChar)
        output = output.replace(
          /^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,
          options.listUnicodeChar + " $1"
        );
      else output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1");
    }

    if (options.gfm) {
      output = output // Header
        .replace(/\n={2,}/g, "\n") // Fenced codeblocks
        .replace(/~{3}.*\n/g, "") // Strikethrough
        .replace(/~~/g, "") // Fenced codeblocks
        .replace(/`{3}.*\n/g, "");
    }

    output = output // Remove HTML tags
      .replace(/<[^>]*>/g, "") // Remove setext-style headers
      .replace(/^[=\-]{2,}\s*$/g, "") // Remove footnotes?
      .replace(/\[\^.+?\](\: .*?$)?/g, "")
      .replace(/\s{0,2}\[.*?\]: .*?$/g, "") // Remove images
      .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, options.useImgAltText ? "$1" : "") // Remove inline links
      .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1") // Remove blockquotes
      .replace(/^\s{0,3}>\s?/g, "") // Remove reference-style links?
      .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "") // Remove atx-style headers
      .replace(
        /^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,
        "$1$2$3"
      ) // Remove emphasis (repeat the line to remove double emphasis)
      .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2")
      .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2") // Remove code blocks
      .replace(/(`{3,})(.*?)\1/gm, "$2") // Remove inline code
      .replace(/`(.+?)`/g, "$1") // Replace two or more newlines with exactly two? Not entirely sure this belongs here...
      .replace(/\n{2,}/g, "\n\n");
  } catch (e) {
    console.error(e);
    return md;
  }

  return output;
};

function MetaTagger(props) {
  var title = titleGenerator_2(props.title, props.subsite, props.site).join(
    " | "
  );
  var suffixedTitle = "".concat(title, " | UNL");
  var preppedDescription = props.description.replace(/\s+/g, " ");
  var prodUrl = "https://u-n-l.github.io";
  if (props.pathname[0] !== "/") prodUrl += "/";
  prodUrl += props.pathname;
  var metaItems = [
    {
      name: "description",
      content: removeMarkdown(preppedDescription),
    },
  ];
  metaItems.push(
    {
      name: "twitter:title",
      content: title,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: removeMarkdown(preppedDescription),
    },
    {
      property: "og:description",
      content: removeMarkdown(preppedDescription),
    },
    {
      property: "og:url",
      content: prodUrl,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      class: "swiftype",
      name: "title",
      "data-type": "string",
      content: props.title,
    },
    {
      class: "swiftype",
      name: "excerpt",
      "data-type": "string",
      content: removeMarkdown(props.description),
    },
    {
      name: "twitter:image:alt",
      content: props.imageAlt,
    },
    {
      property: "og:image",
      content: props.imageUrl,
    },
    {
      class: "swiftype",
      name: "image",
      "data-type": "enum",
      content: props.imageUrl,
    },
    {
      class: "swiftype",
      name: "site",
      "data-type": "string",
      content: props.site,
    }
  );

  if (props.subsite) {
    metaItems.push({
      class: "swiftype",
      name: "subsite",
      "data-type": "string",
      content: props.subsite,
    });
  }

  if (props.contentType) {
    metaItems.push({
      class: "swiftype",
      name: "contentType",
      "data-type": "string",
      content: props.contentType,
    });
  }

  if (props.language) {
    props.language.forEach(function (language) {
      metaItems.push({
        class: "swiftype",
        name: "codeLanguage",
        "data-type": "string",
        content: language,
      });
    });
  }

  if (props.level) {
    metaItems.push({
      class: "swiftype",
      name: "level",
      "data-type": "string",
      content: props.level,
    });
  }

  if (props.largeImage) {
    metaItems.push(
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:image",
        content: props.imageUrl,
      }
    );
  } else {
    metaItems.push(
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:image",
        content: props.imageUrlThumbnail,
      }
    );
  }

  if (props.hideFromSearchEngines) {
    metaItems.push({
      name: "robots",
      content: "noindex, nofollow",
    });
  }

  return React.createElement(Helmet__default, {
    title: suffixedTitle,
    meta: metaItems,
  });
}

MetaTagger.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  subsite: PropTypes.string,
  contentType: PropTypes.string,
  imageUrl: PropTypes.string,
  imageUrlThumbnail: PropTypes.string,
  imageAlt: PropTypes.string,
  largeImage: PropTypes.bool,
  language: PropTypes.array,
  level: PropTypes.number,
  hideFromSearchEngines: PropTypes.bool,
};
MetaTagger.defaultProps = {
  imageUrl: DEFAULT_SOCIAL_IMAGE_URL,
  imageUrlThumbnail: DEFAULT_SOCIAL_IMAGE_THUMBNAIL_URL,
  imageAlt: "UNL",
  largeImage: true,
};

var lastUrl;

var ReactPageShell =
  /*#__PURE__*/
  (function (_React$Component) {
    _inherits(ReactPageShell, _React$Component);

    function ReactPageShell() {
      _classCallCheck(this, ReactPageShell);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(ReactPageShell).apply(this, arguments)
      );
    }

    _createClass(ReactPageShell, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!window.MapboxPageShell)
            throw new Error("MapboxPageShell not loaded");
          this.initialize();
        },
      },
      {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          var currentUrl = window.location.href;
          if (currentUrl === lastUrl) return;
          lastUrl = currentUrl;
          this.initialize();
        },
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          MapboxPageShell.removeNavigation();
        },
      },
      {
        key: "initialize",
        value: function initialize() {
          var _this = this;

          MapboxPageShell.initialize();
        },
      },
      {
        key: "render",
        value: function render() {
          var nonFooterClasses =
            "shell-flex-child shell-flex-child--grow shell-flex-child--no-shrink";

          if (this.props.nonFooterBgClass) {
            nonFooterClasses += " ".concat(this.props.nonFooterBgClass);
          }

          return React.createElement(
            "div",
            {
              id: "page-shell",
            },
            React.createElement(BrowserCompatibilityWarning, null),
            React.createElement(
              "div",
              {
                className: "shell-flex-parent shell-flex-parent--column",
                style: {
                  minHeight: "100vh",
                },
              },
              React.createElement(PageHelmet, null),
              React.createElement(
                MetaTagger,
                _extends({}, this.props.meta, {
                  site: this.props.site,
                  subsite: this.props.subsite,
                })
              ),
              React.createElement(
                "div",
                {
                  className: nonFooterClasses,
                },
                React.createElement(
                  "div",
                  {
                    className: "shell-wrapper",
                  },
                  React.createElement(PageHeader, {
                    darkText: this.props.darkHeaderText,
                  })
                ),
                React.createElement(
                  "main",
                  {
                    role: "main",
                    style: {
                      zIndex: 0,
                      position: "relative",
                      display: "block",
                    },
                  },
                  this.props.children
                )
              )
            )
          );
        },
      },
    ]);

    return ReactPageShell;
  })(React.Component);

ReactPageShell.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contentType: PropTypes.string,
    pathname: PropTypes.string,
    level: PropTypes.number,
    codeLanguage: PropTypes.array,
    hideFromSearchEngines: PropTypes.bool,
  }).isRequired,
  children: PropTypes.node.isRequired,
  site: PropTypes.string.isRequired,
  subsite: PropTypes.string,
  darkHeaderText: PropTypes.bool,
  nonFooterBgClass: PropTypes.string,
  onUser: PropTypes.func,
};
ReactPageShell.defaultProps = {
  darkHeaderText: false,
};

module.exports = ReactPageShell;
