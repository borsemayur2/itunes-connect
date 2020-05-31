import React from "react";
import { Row, Col, Card, Switch } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import ReactAudioPlayer from "react-audio-player";

const CustomCard = styled(Card)`
  margin: 10px;
  border-radius: 1rem;
`;

const CardImage = styled.img`
  height: 100px;
  width: 100px;
  margin: auto;
`;

const SongsGrid = (props) => {
  const [preview, setPreview] = React.useState(false);
  const { data, loading } = props;

  const togglePreview = () => setPreview(!preview);

  if (!data.length) {
    return <></>;
  }
  return (
    <Row>
      <Col span={24}>
        Audio Preview: <Switch onChange={togglePreview} checked={preview} />
      </Col>
      {data.map((e) => {
        return (
          <Col span={6}>
            <CustomCard
              loading={loading}
              title={
                <Row>
                  <Col span={24}>
                    <CardImage src={e.artworkUrl100} />
                  </Col>
                  <Col span={24}>
                    {e.trackNumber}.{e.trackName}
                  </Col>
                </Row>
              }
            >
              <Row gutter={[16, 16]} key={e.trackId}>
                {preview && <ReactAudioPlayer src={e.previewUrl} controls />}
                <Col span={24}>by {e.artistName}</Col>
                <Col span={24}>{e.collectionName}</Col>
              </Row>
            </CustomCard>
          </Col>
        );
      })}
    </Row>
  );
};

export default SongsGrid;
