import React from "react";
import Grid from "./grid";
import {connect} from "react-redux";
import {fetchBooks} from '../apiAction/bookService';


class DashBoard extends React.Component {

    render()
    {
        
       return <Grid data={this.props.bookList ?this.dataFormat(this.props.bookList.books):[] } ></Grid> 
    }

    dataFormat(data)
    {
        return data.map((item)=>{
              return {
                  id:item.id.content,
                  bookTitle:item.title,
                  authorName: item.authors.author.name,
                  rating: item.average_rating,
                  Link: true
              }
        })

    }

    componentDidMount()
    {
        this.props.dispatch(fetchBooks());
    }
}
const mapStateToProps = (state, ownProps) => ({
    bookList: state.booktodo
  })
  
//   const mapDispatchToProps = (dispatch, ownProps) => ({
//     onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
//   })
export default connect(
    mapStateToProps,
    //mapDispatchToProps
  )(DashBoard)