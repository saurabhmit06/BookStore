import React from "react";
import {connect } from "react-redux";
import {
    Redirect,
} from 'react-router-dom'

class BookDetail extends React.Component {

    render() {

        if(this.props.bookList.length == 0  )
                    return (<Redirect to={{
                    pathname: '/',
                    state: { from: this.props.location }
                }}/>)

        let book = this.props.bookList.filter((item)=>{
            return item.id.content == this.props.location.pathname.split("/").pop();
        })[0];

        return (
            <div className="container-fluid">
                <div className="row col-sm-12">
                    <div className="col-sm-2">
                        <div className="bookCoverPrimary">
                            <a rel="nofollow" itemprop="image" href="/book/photo/21344585-software-architecture">
                                <img id="coverImage" alt="Software Architecture: Interview Questions" src={book.image_url} />
                            </a>
                        </div>
                        <div id="colorstar" className="starrr ratable">
                        <span className="glyphicon .glyphicon-star-empty glyphicon-star"></span>
                        <span className="glyphicon .glyphicon-star-empty glyphicon-star"></span>
                        <span className="glyphicon .glyphicon-star-empty glyphicon-star"></span>
                        <span className="glyphicon .glyphicon-star-empty glyphicon-star"></span>
                        <span className="glyphicon .glyphicon-star-empty glyphicon-star-empty"></span>
                        
                        </div>
                        
                    </div>
                    <div className="col-sm-10 leftcontent">
                        <h1 id="bookTitle" className="gr-h1 gr-h1--serif" itemprop="name">
                            {book.title}</h1>
                        <div id="bookAuthors" class="">
                            <span class="by">by</span>
                            <span className="author" itemtype="http://schema.org/Person">
                                <div class="authorName__container">
                                    <a class="authorName" itemprop="url" href={book.authors.author.link}><span itemprop="name">
                                    {book.authors.author.name }</span></a></div>
                            </span>
                        </div>
                        <div id="colorstarstatic" className="starrr ratable">
                        {
                         [...Array(5)].map((x, i) =>{
                             if(parseInt(book.average_rating) > i)
                             return <i class="fa fa-star"></i>
                             else
                             return <i class="fa fa-star-o"></i>
                              
                          })
                        } 
                       </div><span>{book.average_rating}</span>
                        <div id="descriptionContainer">
                            <div id="description" className="readable stacked" >
                                <span id="freeText15514214431362859021"  dangerouslySetInnerHTML={{ __html: book.description }} ></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    bookList: state.booktodo.books
  })

export default connect(
    mapStateToProps,
    //mapDispatchToProps
  )(BookDetail)