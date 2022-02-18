import { ExportCard } from "./export-card";
import { useExportModal } from "./export-modal.context";
import { Format, formatMainInformation } from "./formats";

type Props = {
  disabled?: boolean;
  formatKey: string;
  colorScheme: string;
};

export const ExportFormatCard = ({
  colorScheme,
  formatKey,
  disabled,
}: Props) => {
  const {
    isExportRunning,
    exportFormat,
    setExportFormat,
    setIsOptionsModalOpen,
  } = useExportModal();
  const loading = isExportRunning && formatKey === exportFormat.toLowerCase();
  const {
    format,
    description: subtext,
    logoSrc,
    title,
  } = formatMainInformation[formatKey as Format];

  const onClick = () => {
    setExportFormat(format);
    setIsOptionsModalOpen(true);
  };

  return (
    <ExportCard
      colorScheme={colorScheme}
      logoSrc={logoSrc}
      title={title}
      subtext={subtext}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
    />
  );
};
