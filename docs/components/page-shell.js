import React from "react";
import PropTypes from "prop-types";
// docs-page-shell
import ReactPageShell from "../../vendor/docs-page-shell/react-page-shell.js";
// dr-ui components
import PageLayout from "@mapbox/dr-ui/page-layout";
import { buildMeta, findParentPath } from "@mapbox/dr-ui/page-layout/utils";
// site variables
import constants from "../constants";
// batfish modules
import { withLocation } from "@mapbox/batfish/modules/with-location";
// dataSelectors
import navigation from "@mapbox/batfish/data/navigation";
import filters from "@mapbox/batfish/data/filters";
import apiNavigation from "@mapbox/batfish/data/api-navigation";
import Search from "./api/search";
import AppropriateImage from "./appropriate-image";
import Browser from "@mapbox/dr-ui/browser";
import redirectApiRef from "../util/api-ref-redirect";
import classnames from "classnames";

import { UNL_MAP_JS_VERSION } from "./urls.js";

class PageShell extends React.Component {
  componentDidMount() {
    // redirect hashes on /api/
    if (
      this.props.location.pathname === "/unl-map-js-docs/api/" &&
      this.props.location.hash
    ) {
      if (redirectApiRef(this.props.location))
        window.location = redirectApiRef(this.props.location);
    }
  }

  renderCustomHeadings = () => {
    const { location, frontMatter } = this.props;

    const subSection = findParentPath(navigation, location.pathname);
    if (subSection === "/unl-map-js-docs/api/")
      return (
        frontMatter.headings ||
        apiNavigation.filter((f) => f.path === location.pathname)[0].subnav
      );
    else {
      return frontMatter.headings;
    }
  };
  renderCustomAside = () => {
    const subSection = findParentPath(navigation, this.props.location.pathname);
    if (subSection === "/unl-map-js-docs/api/") return <Search />;
    else return undefined;
  };
  render() {
    const { location, children, frontMatter } = this.props;
    const meta = buildMeta(frontMatter, location.pathname, navigation);

    return (
      <ReactPageShell
        site={constants.SITE}
        subsite={undefined}
        {...this.props}
        meta={meta}
        darkHeaderText={true}
      >
        <PageLayout
          domain={{
            title: "UNL Map JS",
            path: "https://u-n-l.github.io/unl-map-js-docs",
          }}
          hideSearch={true}
          location={location}
          frontMatter={{
            ...frontMatter,
            ...(frontMatter.overviewHeader && {
              overviewHeader: {
                ...frontMatter.overviewHeader,
                version: UNL_MAP_JS_VERSION,
                ...(frontMatter.overviewHeader.image && {
                  image: (
                    <div className="overview-header-browser mb6">
                      <Browser>
                        <AppropriateImage
                          imageId={frontMatter.overviewHeader.image}
                          alt=""
                          className="hmax300"
                        />
                      </Browser>
                    </div>
                  ),
                }),
              },
            }),
            headings: this.renderCustomHeadings(),
          }}
          constants={constants}
          navigation={navigation}
          filters={filters}
          AppropriateImage={AppropriateImage}
          customAside={this.renderCustomAside()}
        >
          <div className={classnames("")}>{children}</div>
        </PageLayout>
      </ReactPageShell>
    );
  }
}

PageShell.propTypes = {
  meta: PropTypes.object,
  frontMatter: PropTypes.object.isRequired,
  children: PropTypes.node,
  location: PropTypes.object.isRequired,
  headings: PropTypes.array,
};

export default withLocation(PageShell);
