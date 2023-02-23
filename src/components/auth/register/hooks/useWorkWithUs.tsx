import moment from "moment";
import { message } from "antd";
import { ICountry, IRegisterFormData } from "src/interfaces";
import { useRouter } from "next/router";
import ProfessionalRegister from "@components/auth/register/ProfessionalRegister";
import { useEffect, useState } from "react";
import { settingService } from "@services/setting.service";

export type IFormAnswers = Record<
  string,
  {
    checkedValue: string;
    data?: string;
  }
>;

function useWorkWithUs({ performerRegister, ui, submiting }) {
  const router = useRouter();
  const [countries, setCountries] = useState<ICountry[]>();
  const [initialFormQandA, setInitialFormQandA] = useState<IFormAnswers>({});

  useEffect(() => {
    const getCountries = async () => {
      try {
        const countries = await settingService.getCountries();
        setCountries(countries.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []);

  const onFinish = (data: IRegisterFormData) => {
    let newData = { ...data };
    if (data.dateOfBirth) {
      newData = {
        ...data,
        dateOfBirth: moment(data.dateOfBirth).toISOString(),
      };
    }

    performerRegister(newData);
    message.success("Registered succesfully.");
    router.push("/auth/login/performer");
  };

  const steps = [
    {
      title: "License Type",
      question: "Select your license type to get started.",
      formName: "licenseType",
      options: [
        "Psychologist",
        "Marriage and Family Therapist",
        "Clinical Social Worker",
        "Child Therapist",
        "Mental Health Counselor",
        "Professional Counselor",
      ],
    },
    {
      title: "Question",
      question: "Where do you currently practice your license?",
      formName: "secondQuestion",
      options: [
        "Clinical Practice",
        "Online Therapy Platforms",
        "Private Practice",
        "Community Health Center",
        "Practice on Academic or Research Setting",
        "Other",
      ],
    },
    {
      title: "Question",
      question: "Why do you want to join 24 hour therapy?",
      formName: "thirdQuestion",
      options: [
        "Interested in Online Therapy",
        "To grow my private practice",
        "To work as a full time",
        "To work as a part time",
        "Other",
      ],
    },
    {
      title: "Question",
      question:
        "How much time do you intend to be available for 24 hour therapy clients?",
      formName: "fourthQuestion",
      options: [
        "Be flexible in time",
        "Up to 5 hours a week",
        "5 to 10 hours a week",
        "10 to 20 hours a week",
        "Other than 30 hours a week",
        "Not decided yet",
      ],
    },
    {
      title: "Question",
      question: "How did you first hear about 24 hour Therapy?",
      formName: "finalQuestion",
      options: [
        "Internet Research",
        "Social Media",
        "Friend or colleague",
        "Email Outreach",
        "Other",
      ],
    },
    {
      title: "Form",
      content: (
        <ProfessionalRegister
          onFinish={onFinish}
          submiting={submiting}
          countries={countries}
          googleReCaptchaEnabled={ui.googleReCaptchaEnabled}
          googleReCaptchaSiteKey={ui.googleReCaptchaSiteKey}
        />
      ),
    },
  ];

  return { steps, initialFormQandA, setInitialFormQandA };
}

export default useWorkWithUs;
