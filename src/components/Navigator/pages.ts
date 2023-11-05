
interface Page {
    name: string
    path: string
    src: string
}

export const pages: Page[] = [{
    name: 'home',
    path: '/',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACCklEQVR4nO2YvWsUURTFjxIUwfhRaBEbu6QRKztBggj+B1qFVNZ2lmltLJaEvXdAEawkgSCCpQgahEjARhGWmH1nioQoFkKw0OCTpzvLuM7uzspkZhbugQMLMzv3/t575+4HYBquNuQ8oS+Cw2uMo9qIZgndJdQHO8iXGHod4yIPf4jQOw6yn0CkYH4Sctdj4TDqrBYaJwhd7QXI8DOieRp11BbkooNs5oDoWBgjupR+BvvcWxoEIXMO+i0/RHLUwntkLgVym5DvpYO00DhKSGNUgAw/inHv2B+Y6DIh26WBxJBzhLwuACLxRjKit/HgDKHPDxwkRnSF0J0CIZKp9pmQa6GGx8JEmHBh0pU6WguE2Q81Qq1Qk9AbhUJ8wP1JQlcOCiAD6GkbD08VCtFGNEPo+7Ig2IXRVozoQiEQMZo3HWSvbAj+PaLn/xsgCVtVAPzHEr3D8pGRIDbRPJsefzXyGrE4lQsi6wOpTnaQTw56dQiE3sr6ilA3O+iP9IjuahdLxx3kcdUNcnSgJx8RneyCOMibzsWvVTfH/P7dq4Oup4/UGiFvt9CcrkGDPo87vW446Mt+OfHjYAyfWtU3SQNJqeqVpu1Ij6peadqO9KjqlWYddmTow8usRQNR2xHa0RogywgsI94yMkiWEVhGvGVkkCwjsIx4y8ggOciruv+wcv3+XTSZULh+AXu77Bm2vQB/AAAAAElFTkSuQmCC',
}, {
    name: 'games',
    path: '/games',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADR0lEQVR4nO1Y3UsUURT/pQV920NP9qf0iUJFRJBQYL31UhTVU20ZYQ9GRmitxpwzYAg+2ntET1EPFSyZUlnCOvdOqYlkH1D0YUyc3QHXdWbcWXdmt5gfHHb37jn3nt+c3/2YCyRIkCBBglpEBuYqDWO7BeOYAp+2YeyJekwbvFeDzsqYMrbkUHZnFvo3aVBag75qsFNoFmifBW5RMM8o0DUNHlDgBxqcUaARDc5q8JQGzyrwHzH57rZlXZ+MGzMgfUhfFrhF+i4eT4O/KPAtySk0EQU+59FhVU2BzpdMQMqoQE+rnbT2tyclSU3mQQ0k6wSZDToZSMJG1xoN+lDtRPWSRpMW+lcHVeNUjSR6cQoD6zS4LcDnuCcJB84KDRr1CrJAu/JEjaY4iEzj9noZbxR9G/x8FOilj6x4h1/QBMzN4iOfMVWlTcho0KVgP3PbIiIafKeodJ81uFeB7ytwR74idFV+S7v7fwxyoiCZ9XktuR+LOuicnzs5AsPyOU+cOuOQ03SAzBRoxkH7yoJqmLs9nlABEe7Q4BcLifD1mOTUFiQzBW4uXK26PYh8kva8tPIEhJArte7KS6tkOTlFdqNwfmSCnOOe7NMlrFoFFXmWIzGG9EYFmgt2NprcijTX1qrFQuS3EI5tb4jSLNnn5NxSfif0U06kGr2NeeOUtEUXx352QpbR9DI6SHnsR6kI4xxvedFNuBtcmUR6GxcnlHvCEcWxX4XvwX1bqxgRG7Qlujj2IzIk0hqvrLTMCxHGOT6WlYrMLONJyARNlTPZy4tjTxMOWOZqUSv2A0tthv+CKdCcrFrf/wMi3xDt4S82m0V5lw2UzsJsQIWRhdmgQT1l5DMpO+qbkEGjDgbrEREcDNb73R0E2GuZI4/CBNmgVkQMG9Qaco48lIrcDRH0ykF7XdREHLTXhTtx0GDIQyMdRkzQMA+FyKtH9pGjJZZvJI5qLKwKD5cs9wmYazXYWspZrvwRMyzQwRKqMS4ccgE2zJ3yyhjgPCQ3kXETcXK3n/w8IK9fcrG4IEhu7RT4vXeAcQBVgoKx30fq7xRoq+9tvAXziAKRLMsK9FaDrqDKUDAvK/CYAj1WYJYcJddq55UgQYIECfAX7uGjyw6U5XEAAAAASUVORK5CYII=',
}, {
//     name: 'office',
//     path: '/office',
//     src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACrklEQVR4nO2dS2pUYRSEa6QOHIkbCIriHlSIj6XoVhwLsf9zO4JzFyCCRtE1qIhC+q/GDMQHSJy3XCKI0MYg3tT/qA/OKINc6junuptAGjDGGGOMMcaY/wCRbhJpm4i3Gek7EaupBuYXHzC/kJFeTBk4jyjgHe6e7MrNEnGViK/HGT4PEUCkR91IGDdfET4PFTD+vBMJRHqmCJ9/FRCrjHi8wINTaPsFVxM+jyCg+Usg4n75AqLdSxjfatYggK1eQkbs1yMg2rsEZfj8BwHNSahRAFuSUKsAtiKhZgFsQULtAli7hBYEsGYJrQhgrRJaEsAaJbQmgLVJaFEAa5LQqgDWIqFlAaxBQusCWLqEHgSwZAlqAR+xdXrdc2WkvS4kqAXsYnZx3XNlpDvT/M7C/qijFpCRbq17rld4eGKUMMUlFCVBLYBIT9AzegGxyphdQ6+ow+fBFezuYTiLHtGHHz+vIF4usX0GvaEOnr9LeL/AsImeUIfO9ZX0lIjbC9y79KfPCc2gDzuko87fAtSoN5C+AH0IdAXpg6Bo1A3kClKj3kD6AvQh0BWkD4KiUTeQK0iNegPpC9CHQFeQPgiKRt1AriA16g2kL0AfAl1B+iAoGnUDuYLUqDeQvgB9CHQF6YOgaNQN5ApSo95A+gL0IdAVpA+ColE3kCtIjXoD6QvQh0BXkD4IikbdQK4gNeoNpC9AHwJdQfogKBp1A7mC1Kg3kL4AfQh0BemDoGjUDeQKUqPeQPZ+Aep/X0/tfEPvX+BA7bwpQcC8gCBWislISZ0/iOFGvwJmZfybHCJ21GHw+Oc5SiFjvpGRPvWz+enLElvnURLE7Mr4YO2HH5+J4TJKZNwK5bfqcfrZIYZzKJ2MuE6kYXybVvPnhHzw7K8zIop5wTXGGGOMMcagdn4AWJdS5VDzbrIAAAAASUVORK5CYII=',
// }, {
    name: 'info',
    path: '/info',
    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVR4nO2aS2sUQRDH/zcfF43gK5700yga0auu3yHBx/oZTDyEhKmaBAn4ESISH99AEjwmJrtO9UL2INGzi5GV2hlRd3vMzkzPa0lBwcIOPf2benR1dQPHMqHSweq5Dvw7BrRgwK8NeMeAvxlQL9TB7+3ov/nwWW8KVZAAaycF3gMDei/gnwbcT6ICOhTQWwE3dCwULR08PyWgRwbUTTr5eKVuAP+hjl0IhMC7ZUCf3QGMaFvg38wNQE1vQIs5Agzry334p51CCPzLBvSxQIh+pJsBli85gTDwrqm5S4DoRwmhpXPIBNGCd0HAu2VBmL/iJrVlNHuU5E59u9JWqhRtwCsZX9wT0BODpelQuRktjFncjFKk2MxfsWn5OM2s4wbwbyRwqezBrZlueGz18+zjUmssFxPwYzc+vTQ9+pHoiqN4mRtn0XNVdlhcy3/qYmwB7f/XKmEB6ARiEOxhTLgLdvMvzP1YEK1i3YHkqwJ+E7uf0LK67Ama8S1yGGDtrCU+6G7ZkzOJ1bttc6uFakyOEyg9s4AMtqBOXhAfg87da92SsdwVh0WBGPCOBYS+un5RARb5YouRXt1ADPj75ILIpLiW5LATLCXYjcP0W6BF1gtZEPO3CI0uiGEvtm4gPGOxiDflumjME0TAP9rwz8AmAn5XHxDasEJEII26gATw78WC7GLxhG4jqw9C3SMbENrarz4Iz6KIdtBR78gytoD3xu446vlEVUE64OtjQfyBYXboCq5iYxlJJexx8Wb5k+fIpeiDJiOkkS5enBfQpwpAtNpYvYgsoocs4WFLeRCClatwIWHzmbbKcKd2VksMi/pn0YehnTyPqvV8Ik9XE/Be4hSbHmbQtZ9zWc5EY82WcgMirM24oQ3lNFuA6ArHhnbWU6dW16INZe3F6q7NgF/pBRoBH/y+VBP93tbtafTMTOx+4lhQf/kF27R/CwZuoWkAAAAASUVORK5CYII=',
}]