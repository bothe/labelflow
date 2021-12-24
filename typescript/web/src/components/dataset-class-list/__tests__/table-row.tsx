import { PropsWithChildren, ReactElement, JSXElementConstructor } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ChakraProvider, Tbody, Table } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { Draggable, DragDropContext, Droppable } from "react-beautiful-dnd";
import { TableRow } from "../table-row";
import { client } from "../../../connectors/apollo-client/schema-client";
import { theme } from "../../../theme";

const classExample = {
  __typename: "LabelClass",
  id: "myClassId",
  index: 0,
  name: "Horse",
  color: "#F87171",
  labelsAggregates: {
    __typename: "LabelsAggregates",
    totalCount: 0,
  },
  shortcut: "myShortcut",
};

const Wrapper = ({ children }: PropsWithChildren<{}>) => (
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme} resetCSS>
      <Table>
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <Tbody {...provided.droppableProps} ref={provided.innerRef}>
                {
                  children as ReactElement<
                    HTMLElement,
                    string | JSXElementConstructor<any>
                  >
                }
              </Tbody>
            )}
          </Droppable>
        </DragDropContext>
      </Table>
    </ChakraProvider>
  </ApolloProvider>
);

const onClickEdit = jest.fn();
const onClickDelete = jest.fn();

const renderTableRow = () => {
  return render(
    <Draggable key={classExample.id} draggableId={classExample.id} index={0}>
      {(provided) => (
        <TableRow
          item={classExample}
          onDelete={onClickDelete}
          onEdit={onClickEdit}
          provided={provided}
        />
      )}
    </Draggable>,
    { wrapper: Wrapper }
  );
};

describe("Dataset class table row tests", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("Should display a class with the possibility to reorder, edit and delete it", () => {
    renderTableRow();

    expect(screen.getByText(/Horse/i)).toBeDefined();
    expect(screen.getByRole("button", { name: "Drag" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Edit class" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Delete class" })).toBeDefined();
    expect(screen.getByText(/myShortcut/i)).toBeDefined();
  });

  it("Should call function to edit name when edit button is clicked", async () => {
    renderTableRow();

    fireEvent.click(screen.getByRole("button", { name: "Edit class" }));
    expect(onClickEdit).toHaveBeenCalledWith(classExample);
  });

  it("Should call function to delete name when delete button is clicked", async () => {
    renderTableRow();

    fireEvent.click(screen.getByRole("button", { name: "Delete class" }));
    expect(onClickDelete).toHaveBeenCalledWith("myClassId");
  });
});
