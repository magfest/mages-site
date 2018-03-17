import React from "react";
import PostPreview from "../PostPreview/PostPreview";
import { Row, Col } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
        <Row ><InfiniteScroll
        pageStart={0}
        hasMore={false}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}>
          {postList.map(post => (
          <Col md={{span: 24}} lg={{span: 12, offset: 6}}>
            <PostPreview key={post.title} postInfo={post} />
          </Col>
          ))}
          </InfiniteScroll>
        </Row>
    );
  }
}

export default PostListing;
