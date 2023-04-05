import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import Context from "../../components/sidebar/context/Context";
import { useNavigate } from "react-router-dom";
import { Button, Table, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { gradeAction } from "../../redux/action/grade";
import AddGrade from "./addGrade";

const Grade = () => {
  const context = useContext(Context);
  const { addGradeOpen, setAddGradeOpen } = context;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  console.log(state);
  const [gradeList, setGradeList] = useState("");

  useEffect(() => {
    dispatch(gradeAction());
  }, []);
  
  useEffect(() => {
    if (state.getGrade.data !== "") {
      if (state.getGrade.data.data.code === 200) {
        setGradeList(state.getGrade.data.data.data);
      }
    }
  }, [state]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    
  ];

      const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: "82vh",
          background: colorBgContainer,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
        <div >
            <h1 style={{ fontSize: "30px", margin: "0px" }}>Grade List</h1>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button
            type="primary"
            onClick={() => {
              setAddGradeOpen(true);
            }}
            style={{backgroundColor: "black", color: "white", fontWeight:'600'}}
          >
            Add Grade
          </Button>
        </div>
        </div>
        <Table
          columns={columns}
          dataSource={gradeList && gradeList}
          pagination={true}
          scroll={{ x: "100%" }}
        />
        <AddGrade />
      </Content>
    </>
  );
};

export default Grade;
