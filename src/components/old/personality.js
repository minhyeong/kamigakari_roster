import React from "react";
import style from "../css/personality.module.css";
import Button from "@mui/material/Button";

class Name extends React.Component {
  #name = "氏名";
  render = () => {
    return <h1 className={style.Name_Box}>{this.#name}</h1>;
  };
}

class Introduction extends React.Component {
  #level = 6;
  #race = "種族";
  #title = {
    main: "主称号",
    sub: "副称号",
    A: "A",
    B: "B",
  };
  render = () => {
    return (
      <div className={style.title}>
        <dl>
          <dt>世界干渉Lv</dt>
          <dt>{this.#level}</dt>
        </dl>
        <dl>
          <dt>種族</dt>
          <dt>{this.#race}</dt>
        </dl>
        <dl>
          <dt>称号</dt>
          <dt>
            <div className={style.title}>
              <dt>{this.#title.main}</dt>
              <dt>{this.#title.A}</dt>
            </div>
            <div className={style.title}>
              <dt>{this.#title.sub}</dt>
              <dt>{this.#title.B}</dt>
            </div>
          </dt>
        </dl>
      </div>
    );
  };
}

class Affiliation extends React.Component {
  #occupation = "化身";
  #organization = "フリーランス";
  render = () => {
    return (
      <div>
        <dl>
          <dt>表の職業</dt>
          <dt>{this.#occupation}</dt>
        </dl>
        <dl>
          <dt>所属組織</dt>
          <dt>{this.#organization}</dt>
        </dl>
      </div>
    );
  };
}

class Detail extends React.Component {
  #paersonalStatus = {
    age: 200,
    gender: "男",
    height: 180,
    weight: 85,
    eyeColor: "青",
    hairColor: "黒",
    skinColor: "肌色",
    other: "ファンブル帝王",
  };
  render = () => {
    return (
      <div>
        <twoStyle>
          <dl>
            <dt>年齢</dt>
            <dt>{this.#paersonalStatus.age}</dt>
          </dl>
          <dl>
            <dt>性別</dt>
            <dt>{this.#paersonalStatus.gender}</dt>
          </dl>
        </twoStyle>
        <twoStyle>
          <dl>
            <dt>身長</dt>
            <dt>{this.#paersonalStatus.height}</dt>
          </dl>
          <dl>
            <dt>体重</dt>
            <dt>{this.#paersonalStatus.weight}</dt>
          </dl>
        </twoStyle>
        <twoStyle>
          <dl>
            <dt>瞳の色</dt>
            <dt>{this.#paersonalStatus.eyeColor}</dt>
          </dl>
          <dl>
            <dt>髪の色</dt>
            <dt>{this.#paersonalStatus.hairColor}</dt>
          </dl>
        </twoStyle>
        <twoStyle>
          <dl>
            <dt>肌の色</dt>
            <dt>{this.#paersonalStatus.skinColor}</dt>
          </dl>
          <dl>
            <dt>その他</dt>
            <dt>{this.#paersonalStatus.other}</dt>
          </dl>
        </twoStyle>
      </div>
    );
  };
}

export default class Personality extends React.Component {
  render = () => {
    return (
      <div>
        <Button variant="contained">Hello World</Button>
        <Name />
        <Introduction />
        <div className={style.title}>
          <Affiliation />
          <Detail />
        </div>
      </div>
    );
  };
}
