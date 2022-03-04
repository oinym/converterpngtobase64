import { FormControl, Typography } from '@mui/material';
import { DropzoneArea } from 'material-ui-dropzone';
import { AttachFile, Description, PictureAsPdf, Theaters, Audiotrack } from '@material-ui/icons';

import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
    previewChip: {
        minWidth: 160,
        maxWidth: 210
    },
}));




export default function PngConverterForm() {
    const classes = useStyles();
    const handlePreviewIcon = (fileObject, classes) => {
        const { type } = fileObject.file
        const iconProps = {
            className: classes.image,
        }

        if (type.startsWith("video/")) return <Theaters {...iconProps} />
        if (type.startsWith("audio/")) return <Audiotrack {...iconProps} />

        switch (type) {
            case "application/msword":
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                return <Description {...iconProps} />
            case "application/pdf":
                return <PictureAsPdf {...iconProps} />
            default:
                return <AttachFile {...iconProps} />
        }
    }

    return (
        <FormControl>
            <Typography variant="h1">Convert Image</Typography>
            <DropzoneArea
                getPreviewIcon={handlePreviewIcon}
                showPreviews={true}
                showPreviewsInDropzone={false}
                useChipsForPreview
                previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
                previewChipProps={{ classes: { root: classes.previewChip } }}
                previewText="Selected files"
            />

        </FormControl>

    );
}