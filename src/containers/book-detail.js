import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    console.log(this.props)
    if(!this.props.book) {
      console.log("Returning null");
      return <div>Select a book to get started.</div>;
    }

    console.log(this.props)
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

// Anything returned from this function will end up as props
// on the BookDetail container
function mapStateToProps(state) {
  console.log("ActiveBook:");
  console.log(state.ActiveBook);
    return {
      book: state.ActiveBook
  };
}

export default connect(mapStateToProps)(BookDetail);
