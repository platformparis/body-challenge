// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gBGqaUF3C5CQvEpDAhmCMe
// Component: j3C2E3ZS0nhWm
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: k5f_ZGrtjLf/component
import Button from "../../Button"; // plasmic-import: RWHbPnNRUlA/component

import { useScreenVariants as useScreenVariantsojSgcPkSvUubm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Oj_sgcPKSvUUBM/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_ebook.module.css"; // plasmic-import: gBGqaUF3C5CQvEpDAhmCMe/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: j3C2E3ZS0nhWm/css

import PlayingCardHeartShapesvgIcon from "./icons/PlasmicIcon__PlayingCardHeartShapesvg"; // plasmic-import: EqyKEX400BvG3m/icon
import BlackCommentsBubbleSvgrepoComsvgIcon from "./icons/PlasmicIcon__BlackCommentsBubbleSvgrepoComsvg"; // plasmic-import: O7PZi_7_tKwG4d/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: -90nyNh7VQn/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: _bdPyp6gOc1JbC/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  foreground2?: p.Flex<"div">;
  form?: p.Flex<"form">;
  textInput?: p.Flex<typeof TextInput>;
  button?: p.Flex<typeof Button>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultHomepageProps {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsojSgcPkSvUubm()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__gq50D)}>
                <div className={classNames(projectcss.all, sty.freeBox__srRov)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ahFnr)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__uhmEj)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__esLEg
                        )}
                      >
                        <h1
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1___8UM30
                          )}
                        >
                          {"Le Body Challenge"}
                        </h1>
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__hXzTj
                        )}
                      >
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__pnHe4
                          )}
                        >
                          <p.PlasmicLink
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              sty.link__dIgov
                            )}
                            component={Link}
                            platform={"nextjs"}
                          >
                            {false ? (
                              <svg
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__oDne
                                )}
                                role={"img"}
                              />
                            ) : null}
                            {false ? (
                              <svg
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__t2O32
                                )}
                                role={"img"}
                              />
                            ) : null}

                            <PlayingCardHeartShapesvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__oKxsZ
                              )}
                              role={"img"}
                            />
                          </p.PlasmicLink>

                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__hsq8Y
                            )}
                          >
                            {false ? (
                              <svg
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__kNjG
                                )}
                                role={"img"}
                              />
                            ) : null}

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__xkXGi
                              )}
                            >
                              {"32k Likes "}
                            </div>

                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link__aCiKy
                              )}
                              component={Link}
                              platform={"nextjs"}
                            >
                              <BlackCommentsBubbleSvgrepoComsvgIcon
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__yiY9V
                                )}
                                role={"img"}
                              />

                              {false ? (
                                <svg
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__anrEg
                                  )}
                                  role={"img"}
                                />
                              ) : null}
                              {false ? (
                                <svg
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__t1EhT
                                  )}
                                  role={"img"}
                                />
                              ) : null}
                            </p.PlasmicLink>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__h4QkP
                              )}
                            >
                              {"312 Commentaires"}
                            </div>

                            {false ? (
                              <svg
                                className={classNames(
                                  projectcss.all,
                                  sty.svg___2Eqmc
                                )}
                                role={"img"}
                              />
                            ) : null}
                            {true ? (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__eR728
                                )}
                              >
                                <p.PlasmicLink
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.a,
                                    sty.link__ugn7O
                                  )}
                                  component={Link}
                                  platform={"nextjs"}
                                >
                                  {false ? (
                                    <svg
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg__bhFaq
                                      )}
                                      role={"img"}
                                    />
                                  ) : null}
                                  {false ? (
                                    <svg
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg__mu9Ck
                                      )}
                                      role={"img"}
                                    />
                                  ) : null}

                                  <svg
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__sz5Gv
                                    )}
                                    role={"img"}
                                  />
                                </p.PlasmicLink>
                              </div>
                            ) : null}
                          </p.Stack>
                        </p.Stack>
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </div>

                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"foreground2"}
                    data-plasmic-override={overrides.foreground2}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.foreground2)}
                  >
                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__dNNu
                        )}
                      >
                        {true ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__nmbaV
                            )}
                          >
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox___2Qyp
                              )}
                            >
                              <h1
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h1,
                                  projectcss.__wab_text,
                                  sty.h1__pf1I7
                                )}
                              >
                                {"Ton E-Book fitness gratuit"}
                              </h1>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__kjbni
                                )}
                              >
                                {"Indique ton email pour le recevoir :"}
                              </div>
                            </p.Stack>
                          </div>
                        ) : null}
                      </div>
                    ) : null}

                    <p.Stack
                      as={"form"}
                      data-plasmic-name={"form"}
                      data-plasmic-override={overrides.form}
                      hasGap={true}
                      action={"https://bodychallenge.noops.land/email" as const}
                      className={classNames(projectcss.all, sty.form)}
                      method={"post" as const}
                    >
                      <TextInput
                        data-plasmic-name={"textInput"}
                        data-plasmic-override={overrides.textInput}
                        className={classNames("__wab_instance", sty.textInput)}
                        placeholder={"email" as const}
                        required={true}
                        showEndIcon={true}
                      />

                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                      >
                        {"Valider"}
                      </Button>
                    </p.Stack>
                  </p.Stack>
                ) : null}
              </div>
            ) : null}

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__htHZi)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__kEYtq)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__yQtP7)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xI0D0
                      )}
                    >
                      {"© MyCapsule. All rights reserved."}
                    </div>
                  </p.Stack>
                </div>
              ) : null}
            </p.Stack>
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "foreground2", "form", "textInput", "textbox", "button"],
  foreground2: ["foreground2", "form", "textInput", "textbox", "button"],
  form: ["form", "textInput", "textbox", "button"],
  textInput: ["textInput", "textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  foreground2: "div";
  form: "form";
  textInput: typeof TextInput;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground2: makeNodeComponent("foreground2"),
    form: makeNodeComponent("form"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
