import { DataTypes, Model, Optional  } from "sequelize";
import { sequelize } from './_index';

interface WpCommentAttributes {
    comment_ID: number
    comment_post_ID: number
    comment_author: Text
    comment_author_email: string
    comment_author_url: string
    comment_author_IP: string
    comment_date?: Date
    comment_date_gmt?: Date
    comment_content: Text
    comment_karma: number
    comment_approved: string
    comment_agent: string
    comment_type: string
    comment_parent: number
    user_id: number
};

/*
  We have to declare the WpCommentCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface WpCommentCreationAttributes
  extends Optional<WpCommentAttributes, 'comment_ID'> {}

interface WpCommentModel
  extends Model<WpCommentAttributes, WpCommentCreationAttributes>{
    comment_ID: number
    comment_post_ID: number
    comment_author: Text
    comment_author_email: string
    comment_author_url: string
    comment_author_IP: string
    comment_date?: Date
    comment_date_gmt?: Date
    comment_content: Text
    comment_karma: number
    comment_approved: string
    comment_agent: string
    comment_type: string
    comment_parent: number
    user_id: number
  }


const WpComment = sequelize.define<WpCommentModel>('wp_comment', {
    comment_ID: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_post_ID: {
        type: DataTypes.INTEGER
    },
    comment_author: {
        type: DataTypes.TEXT
    },
    comment_author_email: {
        type: DataTypes.STRING
    },
    comment_author_url: {
        type: DataTypes.STRING
    },
    comment_author_IP: {
        type: DataTypes.STRING
    },
    comment_date: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    comment_date_gmt: {
        type: DataTypes.DATE
    },
    comment_content: {
        type: DataTypes.TEXT
    },
    comment_karma: {
        type: DataTypes.INTEGER
    },
    comment_approved: {
        type: DataTypes.STRING
    },
    comment_agent: {
        type: DataTypes.STRING
    },
    comment_type: {
        type: DataTypes.STRING
    },
    comment_parent: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    },
},{
    timestamps: false,
    tableName: 'wp_comments',
    hooks: {
        beforeCreate: (wpComment) =>{
            let commentDate = wpComment.getDataValue('comment_date')
            let commentDateGmt = new Date(commentDate.getTime() + commentDate.getTimezoneOffset()*60000)
            wpComment.setDataValue('comment_date_gmt', commentDateGmt)
        }
    }
})

export default WpComment;