import { useQuery } from "@tanstack/react-query";
import { getInspectionFiles } from "/imports/methods/elementFile";

export const useFilesForInspection = ({
    inspectionId,
}: {
    inspectionId: string;
}) =>
    useQuery({
        queryKey: ["files", inspectionId],
        queryFn: async () => {
            const data = await getInspectionFiles({
                inspectionId,
            });
            if (!data) {
                throw new Error("Network response was not ok");
            }
            return data;
        },
    });
