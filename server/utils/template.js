const mapDiscordUsername = {
  Ajinkya: { discordId: "618792286364368916" },
  Sushant: { discordId: "629297564109373450" },
  Garvita: { discordId: "737303396004003871" },
  Kashish: { discordId: "717765987155312661" },
};

module.exports.goalTemplate = (templateData) => {
  const { name, startDate, endDate, goalList } = templateData;
  const startDateFormat = new Date(startDate).toLocaleDateString();
  const endDateFormat = new Date(endDate).toLocaleDateString();

  const nameLabel = name.label;
  const discordUserId = mapDiscordUsername[nameLabel].discordId;

  return `__Goal for the week **[${startDateFormat} - ${endDateFormat}]**__
> By **${nameLabel}** (<@${discordUserId}>)
\`\`\`autohotkey
${goalList.map((goal, index) => index + 1 + ". " + goal).join("\n")}
\`\`\`

`;
};
