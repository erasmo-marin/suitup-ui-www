import React from "react";
import { withRouter } from "react-router-dom";

const getDisplayName = WrappedComponent => {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

const Page = Child => {
    return @withRouter class Page extends React.Component {
        static displayName = `Page(${getDisplayName(Child)})`;

        componentDidMount() {
            window.scrollTo(0,0);
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.location != this.props.location) window.scrollTo(0,0);
        }

        render() {
            return <Child {...this.props} />;
        }
    };
};

export default Page;
