import React, { ReactComponentElement, ReactNode } from 'react';

type IComment = {
  id: number;
};

type IBlogPost = {
  id: number;
}

const DataSource = {
  addChangeListener(listener: () => void) {
    listener();
  },

  removeChangeListener(listener: () => void) {
    console.log('listener removed');
  },

  getBlogPost(id: number): string {
    return `Blog ${id}`;
  },

  getComments(): IComment[] {
    return [];
  }
};


type ListState = {
  comments: IComment[];
};

type CommentProps = {
  comment: IComment;
};
class Comment extends React.Component<CommentProps> {
  render(): React.ReactNode {
    return (
      <div></div>
    )
  }
}

class CommentList extends React.Component<any, ListState> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      comments: DataSource.getComments(),
    }
  }

  componentDidMount(): void {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount(): void {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      comments: DataSource.getComments(),
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}

type BlogPostState = {
  blogPost: string;
};

type BlogPostProps = {
  id: number;
};

class BlogPost extends React.Component<BlogPostProps, BlogPostState> {
  constructor(props: BlogPostProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id),
    }
  }

  componentDidMount(): void {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount(): void {
      DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id),
    });
  }

  render() {
    return <div>{this.state.blogPost}</div>;
  }
}

