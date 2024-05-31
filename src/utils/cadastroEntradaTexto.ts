const sessoes = [
    {
        id:1,
        titulo:"Dados do projeto",
        entradaTexto:[
            {
                id:1,
                label:"Nome do projeto",
                placeholder:"Insira o nome do projeto"
            },
            {
                id:2,
                label:"CPNJ",
                placeholder:"Insira o CPNJ do projeto"
            },
            {
                id:3,
                label:"Parceiro Comercial",
                placeholder:"Insira o nome do parceiro comercial"
            }
        ],
        checkBox:[
            {
                id:1,
                value:"Implantação de novo projeto"
            },
            {
                id:2,
                value:"Atualização de um projeto"
            },
            {
                id:3,
                value:"Reagendamento de projeto"
            }
        ]
    },
    {
        id:2,
        titulo:"Dados da Projeto",
        entradaTexto:[
            {
                id:1,
                label:"Atendimento Técnico",
                placeholder:"Insira o nome da unidade"
            },
            {
                id:2,
                label:"Atendimento Remoto",
                placeholder:"Insira o CPNJ da unidade"
            }
        ],
        checkBox:[
            {
                id:1,
                value:"Portaria Remota"
            },
            {
                id:2,
                value:"Portaria Local"
            },
            {
                id:3,
                value:"Portaria Fácil"
            }
        ]
    }

]

export {sessoes}