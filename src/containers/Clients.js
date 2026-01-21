import React from "react";
import { Row, Col } from "antd";
var contentful = require("contentful");

/**
 * Safely sort a map of { [key]: { order: number } } by order (missing order -> Infinity).
 */
function sortProperties(obj) {
  obj = obj || {};
  var sortable = Object.keys(obj).map(function (key) {
    return [key, obj[key] || {}];
  });

  sortable.sort(function (a, b) {
    var x = a && a[1] && Number.isFinite(a[1].order) ? a[1].order : Infinity;
    var y = b && b[1] && Number.isFinite(b[1].order) ? b[1].order : Infinity;
    return x - y;
  });

  var newList = {};
  for (var i = 0; i < sortable.length; i++) {
    newList[sortable[i][0]] = sortable[i][1];
  }
  return newList;
}

class Clients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      cleanedEntries: {},
      readyToRender: false,
      error: null,
    };

    // ✅ No class field syntax — define client here
    this.client = contentful.createClient({
      space: "m7b48oankuyj",
      accessToken:
        "e6a73de0cbe113450d3bb4b02e54a0db2552cd57c390f8d1cb53e278c9075c8d",
    });

    // ✅ Bind methods (instead of arrow properties)
    this.findItems = this.findItems.bind(this);
    this.renderClientObjects = this.renderClientObjects.bind(this);
    this.renderCategoryObjects = this.renderCategoryObjects.bind(this);
    this.renderClientCard = this.renderClientCard.bind(this);
  }

  // --- Defensive getters (no optional chaining) ---
  getClientTypeName(entry) {
    return (
      (entry &&
        entry.fields &&
        entry.fields.clientType &&
        entry.fields.clientType.fields &&
        entry.fields.clientType.fields.name) ||
      "Other"
    );
  }

  getClientTypeOrder(entry) {
    var order =
      entry &&
      entry.fields &&
      entry.fields.clientType &&
      entry.fields.clientType.fields &&
      entry.fields.clientType.fields.order;

    return Number.isFinite(order) ? order : Infinity;
  }

  getClientName(entry) {
    return (
      (entry && entry.fields && entry.fields.clientName) || "Untitled Client"
    );
  }

  getClientUrl(entry) {
    return (entry && entry.fields && entry.fields.clientUrl) || null;
  }

  getClientImageUrl(entry) {
    var url =
      entry &&
      entry.fields &&
      entry.fields.clientImage &&
      entry.fields.clientImage.fields &&
      entry.fields.clientImage.fields.file &&
      entry.fields.clientImage.fields.file.url;

    if (!url) return null;

    // Contentful often returns protocol-relative URLs like //images.ctfassets.net/...
    var normalized = url.indexOf("//") === 0 ? "https:" + url : url;

    return normalized + "?w=400&h=400&fit=fill&q=60";
  }

  // ✅ No async/await — use Promises
  findItems() {
    var that = this;

    this.client
      .getEntries({ content_type: "client", order: "fields.clientName" })
      .then(function (entriesResp) {
        var items = (entriesResp && entriesResp.items) || [];
        if (!Array.isArray(items)) items = [];

        var cleanedEntries = {};

        for (var i = 0; i < items.length; i++) {
          var entry = items[i];
          var typeName = that.getClientTypeName(entry);
          var typeOrder = that.getClientTypeOrder(entry);

          if (!cleanedEntries[typeName]) {
            cleanedEntries[typeName] = { array: [], order: typeOrder };
          }

          cleanedEntries[typeName].array.push(entry);
        }

        var sortedEntries = sortProperties(cleanedEntries);

        that.setState({
          entries: items,
          cleanedEntries: sortedEntries,
          error: null,
        });
      })
      .catch(function (err) {
        that.setState({
          entries: [],
          cleanedEntries: {},
          error: (err && err.message) || "Failed to load clients.",
        });
      });
  }

  componentDidMount() {
    this.findItems();

    var that = this;
    this._readyTimer = setTimeout(function () {
      that.setState({ readyToRender: true });
    }, 1000);
  }

  componentWillUnmount() {
    if (this._readyTimer) clearTimeout(this._readyTimer);
  }

  renderClientCard(entry, idx) {
    var name = this.getClientName(entry);
    var href = this.getClientUrl(entry);
    var imgSrc = this.getClientImageUrl(entry);

    var key =
      entry && entry.sys && entry.sys.id ? entry.sys.id : name + "-" + idx;

    var cardInner = (
      <div className="client-object">
        {imgSrc ? (
          <img className="client-image" src={imgSrc} alt={name} />
        ) : null}
        <br />
        <div className="border-container">
          <h3>{name}</h3>
          <div className="border" />
        </div>
      </div>
    );

    return (
      <Col lg={{ span: 6 }} md={{ span: 12 }} sm={{ span: 24 }} key={key}>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="client-link"
          >
            {cardInner}
          </a>
        ) : (
          <div className="client-link" style={{ cursor: "default" }}>
            {cardInner}
          </div>
        )}
      </Col>
    );
  }

  renderCategoryObjects(entries) {
    var safeEntries = Array.isArray(entries) ? entries : [];

    var firstRow = safeEntries
      .slice(0, 4)
      .map((e, idx) => this.renderClientCard(e, idx));
    var secondRow = safeEntries
      .slice(4, 8)
      .map((e, idx) => this.renderClientCard(e, idx + 4));

    return (
      <div>
        <Row>{firstRow}</Row>
        <Row>{secondRow}</Row>
      </div>
    );
  }

  renderClientObjects(cleanedEntries) {
    var safe =
      cleanedEntries && typeof cleanedEntries === "object"
        ? cleanedEntries
        : {};
    var categories = Object.keys(safe);

    return categories.map((category) => {
      var bucket = safe[category] || {};
      var arr = Array.isArray(bucket.array) ? bucket.array : [];

      return (
        <Row key={category}>
          <h2 id={category}>{category}</h2>
          <br />
          <Row>{this.renderCategoryObjects(arr)}</Row>
          <br />
        </Row>
      );
    });
  }

  render() {
    var error = this.state.error;

    return (
      <div className="style-wrapper" style={{ marginTop: "20px" }}>
        <div className="home-wrapper company-listings tight-container">
          <br />
          <br />

          {error ? (
            <div style={{ marginBottom: 12 }}>
              <strong>Couldn’t load clients.</strong>
              <div>{error}</div>
            </div>
          ) : null}

          {this.renderClientObjects(this.state.cleanedEntries)}
        </div>
      </div>
    );
  }
}

export default Clients;
