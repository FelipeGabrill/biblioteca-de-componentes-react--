import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbBotao } from "../src";

export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Templete: ComponentStory<typeof AbBotao> = () => <AbBotao />

export const Primario = Templete.bind({})
