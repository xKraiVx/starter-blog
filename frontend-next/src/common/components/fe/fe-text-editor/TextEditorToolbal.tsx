import { Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import { Editor } from "@tiptap/react";
import { JSX, useState } from "react";

interface ITextEditorToolbarProps {
  editor: Editor;
}

export default function TextEditorToolbar({
  editor,
}: ITextEditorToolbarProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonGroup variant="outlined" size="small" sx={{ mb: 2 }}>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          variant={editor.isActive("bold") ? "contained" : "outlined"}
        >
          Bold
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          variant={editor.isActive("italic") ? "contained" : "outlined"}
        >
          Italic
        </Button>
        <Button onClick={handleMenuClick}>Typography</Button>
      </ButtonGroup>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 1 }).run();
            handleMenuClose();
          }}
        >
          H1
        </MenuItem>
        <MenuItem
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 2 }).run();
            handleMenuClose();
          }}
        >
          H2
        </MenuItem>
        <MenuItem
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 3 }).run();
            handleMenuClose();
          }}
        >
          H3
        </MenuItem>
        <MenuItem
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 4 }).run();
            handleMenuClose();
          }}
        >
          H4
        </MenuItem>
        <MenuItem
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 5 }).run();
            handleMenuClose();
          }}
        >
          H5
        </MenuItem>
        <MenuItem
          onClick={() => {
            editor.chain().focus().toggleHeading({ level: 6 }).run();
            handleMenuClose();
          }}
        >
          H6
        </MenuItem>
        <MenuItem
          onClick={() => {
            editor.chain().focus().setParagraph().run();
            handleMenuClose();
          }}
        >
          P
        </MenuItem>
      </Menu>
    </>
  );
}
