import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbGrupoOpcoes } from "../src";

export default {
    title: 'Componentes/AbBotao',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Templete: ComponentStory<typeof AbGrupoOpcoes> = () => <AbGrupoOpcoes />

export const Padrao = Templete.bind({})

Padrao.args = {
} 
