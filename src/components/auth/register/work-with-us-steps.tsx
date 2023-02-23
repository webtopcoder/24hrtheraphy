import {
  Button,
  Col,
  Input,
  InputRef,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
  Steps,
} from "antd";
import { useRef, useState } from "react";
import { connect } from "react-redux";
import { performerRegister } from "@redux/auth/actions";
import useWorkWithUs from "./hooks/useWorkWithUs";
import { IRegisterFormData, IUIConfig } from "src/interfaces";

interface IProps {
  ui: IUIConfig;
  submiting: boolean;
  performerRegister(data: IRegisterFormData): Function;
}

function WorkWithUsSteps({ performerRegister, submiting, ui }: IProps) {
  const [current, setCurrent] = useState(0);
  const { steps, initialFormQandA, setInitialFormQandA } = useWorkWithUs({
    performerRegister,
    submiting,
    ui,
  });

  const inputRef = useRef<InputRef>(null);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onRadioChange = (e: RadioChangeEvent) => {
    const checkedValue = e.target.value;
    setInitialFormQandA((prevState) => ({
      ...prevState,
      [steps[current].question]: {
        checkedValue,
      },
    }));
  };

  const handleNextClick = () => {
    if (initialFormQandA[steps[current].question]?.checkedValue === "Other") {
      const inputValue = inputRef.current?.input.value;
      setInitialFormQandA((prevState) => ({
        ...prevState,
        [steps[current].question]: {
          ...prevState[steps[current].question],
          data: inputValue,
        },
      }));
    }

    next();
  };

  return (
    <>
      <Steps
        style={{
          marginTop: "3rem",
        }}
        current={current}
        items={items}
      />

      {steps[current] ? (
        <div style={{ marginTop: `3rem` }}>
          {steps[current].question ? (
            <h5>Q. {steps[current].question}</h5>
          ) : null}

          {steps[current].content}
          {steps[current].options && steps[current].options.length > 0 && (
            <Radio.Group
              onChange={onRadioChange}
              value={
                initialFormQandA[steps[current].question]?.checkedValue ??
                steps[current].options[0]
              }
            >
              <Space direction="vertical">
                {steps[current].options.map((option, index) => (
                  <Space
                    key={index}
                    align="center"
                    style={{
                      marginTop: "1.4rem",
                    }}
                  >
                    <Radio
                      style={{
                        marginLeft: "0.8rem",
                      }}
                      value={option}
                    >
                      {option}
                      {option === "Other" && (
                        <Input
                          ref={inputRef}
                          style={{
                            width: 100,
                            marginLeft: 10,
                          }}
                        />
                      )}
                    </Radio>
                  </Space>
                ))}
              </Space>
            </Radio.Group>
          )}
        </div>
      ) : null}

      <Row
        style={{
          marginTop: "2rem",
        }}
      >
        <Col span={8}>
          {current > 0 && (
            <Button
              style={{
                height: "50px",
                width: "100%",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </Col>

        <Col span={8} offset={8}>
          {current < steps.length - 1 && (
            <Button
              type="primary"
              style={{
                height: "50px",
                width: "100%",
              }}
              onClick={handleNextClick}
            >
              Next
            </Button>
          )}
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  ui: { ...state.ui },
  ...state.auth.performerRegister,
});

const mapDispatchs = {
  performerRegister,
};

export default connect<IProps>(mapStateToProps, mapDispatchs)(WorkWithUsSteps);
