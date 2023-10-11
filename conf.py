# -- Project information -----------------------------------------------------

project = "Nick Byrne's Blog"
author = "Nick Byrne"

# -- General configuration ---------------------------------------------------

extensions = [
    "myst_nb",
    "ablog",
    "sphinx_panels",
    "sphinxext.opengraph",
]

templates_path = ["_templates"]
exclude_patterns = [
    "_build",
    "Thumbs.db",
    ".DS_Store",
    "README.md",
]


# -- Options for HTML output -------------------------------------------------

html_theme = "pydata_sphinx_theme"

html_theme_options = {
    "github_url": "https://github.com/nenb/",
    "twitter_url": "https://twitter.com/_nenb",
    "search_bar_text": "Search ...",
    "navbar_end": ["search-field.html", "theme-switcher", "navbar-icon-links"],
    "page_sidebar_items": [],
    "icon_links": [
        {
            "name": "Mastodon",
            "url": "https://mastodon.top/@nenb",
            "icon": "fa-brands fa-mastodon",
        },
    ],
    "secondary_sidebar_items": [],
}

html_favicon = "_static/favicon.ico"
html_title = "Homepage"
html_static_path = ["_static"]
html_sidebars = {"index": ["hello.html"], "blog/**": ["hello.html"]}
blog_baseurl = "nenb.github.io"
blog_title = "Nick Byrne's Blog"
blog_path = "blog"
fontawesome_included = True
blog_post_pattern = "blog/*"
post_redirect_refresh = 1
post_auto_image = 0
post_auto_excerpt = 1
post_show_prev_next = True
blog_feed_fulltext = True
blog_authors = {
    "Nick Byrne": ("Nick Byrne", "nenb.github.io"),
}

html_extra_path = []


# Panels config
panels_add_bootstrap_css = False

# MyST config
myst_enable_extensions = [
    "colon_fence",
    "deflist",
    "html_image",
]

# OpenGraph config
ogp_site_url = "nenb.github.io"
ogp_image = "nenb.github.io/_static/profile.jpg"

# Taken from choldgraf.github.io
jupyter_execute_notebooks = "off"


def setup(app):
    app.add_css_file("custom.css")
