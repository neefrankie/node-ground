import React from 'react';

type IComment = {
  id: number;
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
      comments: [],
    }
  }

  componentDidMount(): void {
      
  }

  componentWillUnmount(): void {
      
  }

  handleChange() {
    this.setState({
      comments: []
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
