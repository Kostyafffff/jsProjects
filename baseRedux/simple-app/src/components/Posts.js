import React from "react";
import Post from "./Post";
import {connect} from "react-redux";

const Posts = ({ myPosts }) => {

    if(!myPosts.length) {
        return <button className="btn btn-primary">No posts</button>
    }
    return myPosts.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = (state) => {
    return {
        myPosts: state.posts.posts,
    }
}

export default connect(mapStateToProps, null)(Posts);