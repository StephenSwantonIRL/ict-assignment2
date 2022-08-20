import React from "react";
import Grid from "@material-ui/core/Grid";

const ContentList = ( {content, action, cardType }) => {
  let contentCards = content.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
        {cardType(m.id, m, action)}
    </Grid>
  ));
  return contentCards;
};

export default ContentList;