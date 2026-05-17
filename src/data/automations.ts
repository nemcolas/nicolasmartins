import type { BiStr } from "./translations";

export type Automation = {
  title: BiStr;
  description: BiStr;
  stack: string[];
};

export const automations: Automation[] = [
  {
    title: {
      pt: "Detecção de divergência de SKU",
      en: "SKU divergence detection",
    },
    description: {
      pt: "Script que compara o inventário do Tiny ERP com o Magento 2 via API, detecta divergências e gera relatório priorizado — eliminou vendas de produto sem estoque.",
      en: "Script that compares Tiny ERP inventory with Magento 2 via API, detects divergences and generates a prioritized report — eliminated out-of-stock sales.",
    },
    stack: ["Python", "Magento 2 API", "Tiny ERP"],
  },
  {
    title: {
      pt: "Curva ABC de produtos",
      en: "Product ABC curve",
    },
    description: {
      pt: "Pipeline que classifica o catálogo em A/B/C por volume de vendas e margem — usado pelo time comercial para decisão de compra e gestão de ruptura.",
      en: "Pipeline that classifies the catalog into A/B/C by sales volume and margin — used by the commercial team for purchasing decisions and stockout management.",
    },
    stack: ["Python", "Pandas", "Magento 2 API"],
  },
  {
    title: {
      pt: "Reposicionamento de grade no e-commerce",
      en: "E-commerce grid repositioning",
    },
    description: {
      pt: "Reordena produtos nas categorias do Magento 2 via API com base em vendas, estoque disponível e margem — melhora visibilidade dos top sellers sem intervenção manual.",
      en: "Reorders products in Magento 2 categories via API based on sales, available stock, and margin — improves top seller visibility without manual intervention.",
    },
    stack: ["Python", "Magento 2 API"],
  },
  {
    title: {
      pt: "Relatórios de performance de produtos",
      en: "Product performance reports",
    },
    description: {
      pt: "Relatórios automatizados que identificam produtos com potencial de venda subestimado, cruzando dados de estoque, histórico de vendas e sazonalidade.",
      en: "Automated reports identifying products with underestimated sales potential, cross-referencing stock data, sales history, and seasonality.",
    },
    stack: ["Python", "Pandas"],
  },
];
