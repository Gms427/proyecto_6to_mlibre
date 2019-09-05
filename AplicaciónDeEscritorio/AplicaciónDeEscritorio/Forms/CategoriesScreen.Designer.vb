<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class CategoriesScreen
    Inherits System.Windows.Forms.Form

    'Form reemplaza a Dispose para limpiar la lista de componentes.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Requerido por el Diseñador de Windows Forms
    Private components As System.ComponentModel.IContainer

    'NOTA: el Diseñador de Windows Forms necesita el siguiente procedimiento
    'Se puede modificar usando el Diseñador de Windows Forms.  
    'No lo modifique con el editor de código.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(CategoriesScreen))
        Me.viewRemoveCategory = New System.Windows.Forms.Panel()
        Me.btnCancelRemoveCategory = New System.Windows.Forms.Button()
        Me.btnAceptRemoveCategory = New System.Windows.Forms.Button()
        Me.lblRemoveCategory = New System.Windows.Forms.Label()
        Me.btnCloseRemoveCategory = New System.Windows.Forms.Button()
        Me.btnRemoveCategory = New System.Windows.Forms.Button()
        Me.viewAddCategory = New System.Windows.Forms.Panel()
        Me.btnAcceptCategory = New System.Windows.Forms.Button()
        Me.tbxNameCategory = New System.Windows.Forms.TextBox()
        Me.lblCategoryName = New System.Windows.Forms.Label()
        Me.lblAddCategory = New System.Windows.Forms.Label()
        Me.btnCloseAddCategory = New System.Windows.Forms.Button()
        Me.btnAddCategory = New System.Windows.Forms.Button()
        Me.tvCategories = New System.Windows.Forms.TreeView()
        Me.btnCloseApp = New System.Windows.Forms.Button()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.viewRemoveCategory.SuspendLayout()
        Me.viewAddCategory.SuspendLayout()
        Me.SuspendLayout()
        '
        'viewRemoveCategory
        '
        Me.viewRemoveCategory.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.viewRemoveCategory.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.viewRemoveCategory.Controls.Add(Me.btnCancelRemoveCategory)
        Me.viewRemoveCategory.Controls.Add(Me.btnAceptRemoveCategory)
        Me.viewRemoveCategory.Controls.Add(Me.lblRemoveCategory)
        Me.viewRemoveCategory.Controls.Add(Me.btnCloseRemoveCategory)
        Me.viewRemoveCategory.Location = New System.Drawing.Point(476, 310)
        Me.viewRemoveCategory.Name = "viewRemoveCategory"
        Me.viewRemoveCategory.Size = New System.Drawing.Size(415, 185)
        Me.viewRemoveCategory.TabIndex = 38
        Me.viewRemoveCategory.Visible = False
        '
        'btnCancelRemoveCategory
        '
        Me.btnCancelRemoveCategory.BackColor = System.Drawing.Color.FromArgb(CType(CType(82, Byte), Integer), CType(CType(148, Byte), Integer), CType(CType(226, Byte), Integer))
        Me.btnCancelRemoveCategory.FlatAppearance.BorderSize = 0
        Me.btnCancelRemoveCategory.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCancelRemoveCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnCancelRemoveCategory.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnCancelRemoveCategory.Location = New System.Drawing.Point(220, 95)
        Me.btnCancelRemoveCategory.Name = "btnCancelRemoveCategory"
        Me.btnCancelRemoveCategory.Size = New System.Drawing.Size(75, 25)
        Me.btnCancelRemoveCategory.TabIndex = 38
        Me.btnCancelRemoveCategory.Text = "Cancelar"
        Me.btnCancelRemoveCategory.UseVisualStyleBackColor = False
        '
        'btnAceptRemoveCategory
        '
        Me.btnAceptRemoveCategory.BackColor = System.Drawing.Color.FromArgb(CType(CType(82, Byte), Integer), CType(CType(148, Byte), Integer), CType(CType(226, Byte), Integer))
        Me.btnAceptRemoveCategory.FlatAppearance.BorderSize = 0
        Me.btnAceptRemoveCategory.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnAceptRemoveCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnAceptRemoveCategory.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnAceptRemoveCategory.Location = New System.Drawing.Point(120, 95)
        Me.btnAceptRemoveCategory.Name = "btnAceptRemoveCategory"
        Me.btnAceptRemoveCategory.Size = New System.Drawing.Size(75, 25)
        Me.btnAceptRemoveCategory.TabIndex = 37
        Me.btnAceptRemoveCategory.Text = "Aceptar"
        Me.btnAceptRemoveCategory.UseVisualStyleBackColor = False
        '
        'lblRemoveCategory
        '
        Me.lblRemoveCategory.AutoSize = True
        Me.lblRemoveCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblRemoveCategory.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.lblRemoveCategory.Location = New System.Drawing.Point(59, 55)
        Me.lblRemoveCategory.Name = "lblRemoveCategory"
        Me.lblRemoveCategory.Size = New System.Drawing.Size(296, 18)
        Me.lblRemoveCategory.TabIndex = 3
        Me.lblRemoveCategory.Text = "¿Realmente desea eliminar la categoría?"
        '
        'btnCloseRemoveCategory
        '
        Me.btnCloseRemoveCategory.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnCloseRemoveCategory.BackgroundImage = CType(resources.GetObject("btnCloseRemoveCategory.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseRemoveCategory.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseRemoveCategory.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseRemoveCategory.FlatAppearance.BorderSize = 0
        Me.btnCloseRemoveCategory.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseRemoveCategory.Location = New System.Drawing.Point(365, 5)
        Me.btnCloseRemoveCategory.Name = "btnCloseRemoveCategory"
        Me.btnCloseRemoveCategory.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseRemoveCategory.TabIndex = 34
        Me.btnCloseRemoveCategory.UseVisualStyleBackColor = False
        '
        'btnRemoveCategory
        '
        Me.btnRemoveCategory.BackColor = System.Drawing.Color.FromArgb(CType(CType(82, Byte), Integer), CType(CType(148, Byte), Integer), CType(CType(226, Byte), Integer))
        Me.btnRemoveCategory.FlatAppearance.BorderSize = 0
        Me.btnRemoveCategory.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnRemoveCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnRemoveCategory.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnRemoveCategory.Image = CType(resources.GetObject("btnRemoveCategory.Image"), System.Drawing.Image)
        Me.btnRemoveCategory.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft
        Me.btnRemoveCategory.Location = New System.Drawing.Point(995, 225)
        Me.btnRemoveCategory.Name = "btnRemoveCategory"
        Me.btnRemoveCategory.Size = New System.Drawing.Size(140, 40)
        Me.btnRemoveCategory.TabIndex = 3
        Me.btnRemoveCategory.Text = "Eliminar categría"
        Me.btnRemoveCategory.TextAlign = System.Drawing.ContentAlignment.MiddleRight
        Me.btnRemoveCategory.UseVisualStyleBackColor = False
        '
        'viewAddCategory
        '
        Me.viewAddCategory.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.viewAddCategory.Controls.Add(Me.btnAcceptCategory)
        Me.viewAddCategory.Controls.Add(Me.tbxNameCategory)
        Me.viewAddCategory.Controls.Add(Me.lblCategoryName)
        Me.viewAddCategory.Controls.Add(Me.lblAddCategory)
        Me.viewAddCategory.Controls.Add(Me.btnCloseAddCategory)
        Me.viewAddCategory.Location = New System.Drawing.Point(476, 310)
        Me.viewAddCategory.Name = "viewAddCategory"
        Me.viewAddCategory.Size = New System.Drawing.Size(415, 185)
        Me.viewAddCategory.TabIndex = 2
        Me.viewAddCategory.Visible = False
        '
        'btnAcceptCategory
        '
        Me.btnAcceptCategory.BackColor = System.Drawing.Color.FromArgb(CType(CType(82, Byte), Integer), CType(CType(148, Byte), Integer), CType(CType(226, Byte), Integer))
        Me.btnAcceptCategory.FlatAppearance.BorderSize = 0
        Me.btnAcceptCategory.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnAcceptCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnAcceptCategory.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnAcceptCategory.Location = New System.Drawing.Point(170, 115)
        Me.btnAcceptCategory.Name = "btnAcceptCategory"
        Me.btnAcceptCategory.Size = New System.Drawing.Size(75, 25)
        Me.btnAcceptCategory.TabIndex = 37
        Me.btnAcceptCategory.Text = "Aceptar"
        Me.btnAcceptCategory.UseVisualStyleBackColor = False
        '
        'tbxNameCategory
        '
        Me.tbxNameCategory.BackColor = System.Drawing.Color.White
        Me.tbxNameCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tbxNameCategory.ForeColor = System.Drawing.SystemColors.ActiveCaptionText
        Me.tbxNameCategory.Location = New System.Drawing.Point(112, 80)
        Me.tbxNameCategory.Name = "tbxNameCategory"
        Me.tbxNameCategory.Size = New System.Drawing.Size(190, 24)
        Me.tbxNameCategory.TabIndex = 36
        Me.tbxNameCategory.TextAlign = System.Windows.Forms.HorizontalAlignment.Center
        '
        'lblCategoryName
        '
        Me.lblCategoryName.AutoSize = True
        Me.lblCategoryName.Font = New System.Drawing.Font("Berlin Sans FB Demi", 11.25!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblCategoryName.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.lblCategoryName.Location = New System.Drawing.Point(69, 50)
        Me.lblCategoryName.Name = "lblCategoryName"
        Me.lblCategoryName.Size = New System.Drawing.Size(276, 18)
        Me.lblCategoryName.TabIndex = 3
        Me.lblCategoryName.Text = "Nombre de la categoría/subcategoría:"
        '
        'lblAddCategory
        '
        Me.lblAddCategory.AutoSize = True
        Me.lblAddCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblAddCategory.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.lblAddCategory.Location = New System.Drawing.Point(120, 10)
        Me.lblAddCategory.Name = "lblAddCategory"
        Me.lblAddCategory.Size = New System.Drawing.Size(175, 24)
        Me.lblAddCategory.TabIndex = 35
        Me.lblAddCategory.Text = "Añadir Categoría"
        '
        'btnCloseAddCategory
        '
        Me.btnCloseAddCategory.BackColor = System.Drawing.Color.Transparent
        Me.btnCloseAddCategory.BackgroundImage = CType(resources.GetObject("btnCloseAddCategory.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseAddCategory.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseAddCategory.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseAddCategory.FlatAppearance.BorderSize = 0
        Me.btnCloseAddCategory.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseAddCategory.Location = New System.Drawing.Point(365, 5)
        Me.btnCloseAddCategory.Name = "btnCloseAddCategory"
        Me.btnCloseAddCategory.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseAddCategory.TabIndex = 34
        Me.btnCloseAddCategory.UseVisualStyleBackColor = False
        '
        'btnAddCategory
        '
        Me.btnAddCategory.BackColor = System.Drawing.Color.FromArgb(CType(CType(82, Byte), Integer), CType(CType(148, Byte), Integer), CType(CType(226, Byte), Integer))
        Me.btnAddCategory.FlatAppearance.BorderSize = 0
        Me.btnAddCategory.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnAddCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 9.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnAddCategory.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.btnAddCategory.Image = CType(resources.GetObject("btnAddCategory.Image"), System.Drawing.Image)
        Me.btnAddCategory.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft
        Me.btnAddCategory.Location = New System.Drawing.Point(995, 180)
        Me.btnAddCategory.Name = "btnAddCategory"
        Me.btnAddCategory.Size = New System.Drawing.Size(140, 40)
        Me.btnAddCategory.TabIndex = 1
        Me.btnAddCategory.Text = "Añadir categría"
        Me.btnAddCategory.TextAlign = System.Drawing.ContentAlignment.MiddleRight
        Me.btnAddCategory.UseVisualStyleBackColor = False
        '
        'tvCategories
        '
        Me.tvCategories.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.tvCategories.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.tvCategories.Font = New System.Drawing.Font("Berlin Sans FB Demi", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tvCategories.ForeColor = System.Drawing.SystemColors.ButtonHighlight
        Me.tvCategories.Location = New System.Drawing.Point(384, 175)
        Me.tvCategories.Name = "tvCategories"
        Me.tvCategories.Size = New System.Drawing.Size(599, 460)
        Me.tvCategories.TabIndex = 0
        '
        'btnCloseApp
        '
        Me.btnCloseApp.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnCloseApp.BackgroundImage = CType(resources.GetObject("btnCloseApp.BackgroundImage"), System.Drawing.Image)
        Me.btnCloseApp.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnCloseApp.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnCloseApp.FlatAppearance.BorderSize = 0
        Me.btnCloseApp.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnCloseApp.Location = New System.Drawing.Point(1310, 15)
        Me.btnCloseApp.Name = "btnCloseApp"
        Me.btnCloseApp.Size = New System.Drawing.Size(42, 40)
        Me.btnCloseApp.TabIndex = 32
        Me.btnCloseApp.UseVisualStyleBackColor = False
        '
        'btnPrevious
        '
        Me.btnPrevious.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.btnPrevious.BackgroundImage = CType(resources.GetObject("btnPrevious.BackgroundImage"), System.Drawing.Image)
        Me.btnPrevious.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.btnPrevious.Cursor = System.Windows.Forms.Cursors.Hand
        Me.btnPrevious.FlatAppearance.BorderSize = 0
        Me.btnPrevious.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnPrevious.Location = New System.Drawing.Point(1275, 15)
        Me.btnPrevious.Name = "btnPrevious"
        Me.btnPrevious.Size = New System.Drawing.Size(37, 40)
        Me.btnPrevious.TabIndex = 33
        Me.btnPrevious.UseVisualStyleBackColor = False
        '
        'imgNosbey
        '
        Me.imgNosbey.BackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.BackgroundImage = CType(resources.GetObject("imgNosbey.BackgroundImage"), System.Drawing.Image)
        Me.imgNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgNosbey.Enabled = False
        Me.imgNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.imgNosbey.FlatAppearance.BorderSize = 0
        Me.imgNosbey.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.imgNosbey.Location = New System.Drawing.Point(586, 5)
        Me.imgNosbey.Name = "imgNosbey"
        Me.imgNosbey.Size = New System.Drawing.Size(195, 160)
        Me.imgNosbey.TabIndex = 39
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'CategoriesScreen
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(255, Byte), Integer), CType(CType(194, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.imgNosbey)
        Me.Controls.Add(Me.viewAddCategory)
        Me.Controls.Add(Me.viewRemoveCategory)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnRemoveCategory)
        Me.Controls.Add(Me.tvCategories)
        Me.Controls.Add(Me.btnCloseApp)
        Me.Controls.Add(Me.btnAddCategory)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Name = "CategoriesScreen"
        Me.Text = "CategoriesScreen"
        Me.viewRemoveCategory.ResumeLayout(False)
        Me.viewRemoveCategory.PerformLayout()
        Me.viewAddCategory.ResumeLayout(False)
        Me.viewAddCategory.PerformLayout()
        Me.ResumeLayout(False)

    End Sub
    Friend WithEvents btnCloseApp As Button
    Friend WithEvents tvCategories As TreeView
    Friend WithEvents btnAddCategory As Button
    Friend WithEvents btnPrevious As Button
    Friend WithEvents viewAddCategory As Panel
    Friend WithEvents btnCloseAddCategory As Button
    Friend WithEvents lblAddCategory As Label
    Friend WithEvents lblCategoryName As Label
    Friend WithEvents tbxNameCategory As TextBox
    Friend WithEvents btnAcceptCategory As Button
    Friend WithEvents btnRemoveCategory As Button
    Friend WithEvents viewRemoveCategory As Panel
    Friend WithEvents btnAceptRemoveCategory As Button
    Friend WithEvents lblRemoveCategory As Label
    Friend WithEvents btnCloseRemoveCategory As Button
    Friend WithEvents btnCancelRemoveCategory As Button
    Friend WithEvents imgNosbey As Button
End Class
