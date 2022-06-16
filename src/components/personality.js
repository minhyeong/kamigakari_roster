import React from "react";
import style from "../css/personality.module.css";

export default class Personality extends React.Component {
  #name = "大口真";
  #level = 6;
  #race = "神霊";
  #title = {
    main: "エレメンタルアデプト",
    sub: "ディバイントーカー",
  };
  #occupation = "化身";
  #organization = "フリーランス";
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
        {/* 氏名 */}
        <div className={style.nameBox}>{this.#name}</div>

        {/* 人物紹介 */}
        <div className={style.personalData}>
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
            <dt className={style.title}>
              <dt>
                <dd>{this.#title.main}</dd>
                <dd className={style.title2}>A</dd>
              </dt>
              <dt>
                <dd>{this.#title.sub}</dd>
                <dd className={style.title2}>A</dd>
              </dt>
            </dt>
          </dl>
        </div>

        {/* 3段目 */}
        <div className={style.personalDetail}>
          {/* 所属 */}
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

          {/* 人物詳細 */}
          <div>
            <div2>
              <dl>
                <dt>年齢</dt>
                <dt>{this.#paersonalStatus.age}</dt>
              </dl>
              <dl>
                <dt>性別</dt>
                <dt>{this.#paersonalStatus.gender}</dt>
              </dl>
            </div2>
            <div2>
              <dl>
                <dt>身長</dt>
                <dt>{this.#paersonalStatus.height}</dt>
              </dl>
              <dl>
                <dt>体重</dt>
                <dt>{this.#paersonalStatus.weight}</dt>
              </dl>
            </div2>
            <div2>
              <dl>
                <dt>瞳の色</dt>
                <dt>{this.#paersonalStatus.eyeColor}</dt>
              </dl>
              <dl>
                <dt>髪の色</dt>
                <dt>{this.#paersonalStatus.hairColor}</dt>
              </dl>
            </div2>
            <div2>
              <dl>
                <dt>肌の色</dt>
                <dt>{this.#paersonalStatus.skinColor}</dt>
              </dl>
              <dl>
                <dt>その他</dt>
                <dt>{this.#paersonalStatus.other}</dt>
              </dl>
            </div2>
          </div>
        </div>
      </div>
    );
  };
}
