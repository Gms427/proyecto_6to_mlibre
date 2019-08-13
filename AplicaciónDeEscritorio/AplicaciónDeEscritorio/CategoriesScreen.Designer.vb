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
        Me.backgroundProducts = New System.Windows.Forms.Panel()
        Me.viewAddCategory = New System.Windows.Forms.Panel()
        Me.lblCategoryName = New System.Windows.Forms.Label()
        Me.lblAddCategory = New System.Windows.Forms.Label()
        Me.btnCloseAddCategory = New System.Windows.Forms.Button()
        Me.btnAddCategory = New System.Windows.Forms.Button()
        Me.tvCategories = New System.Windows.Forms.TreeView()
        Me.imgNosbey = New System.Windows.Forms.Button()
        Me.btnCloseApp = New System.Windows.Forms.Button()
        Me.btnPrevious = New System.Windows.Forms.Button()
        Me.tbxNameCategory = New System.Windows.Forms.TextBox()
        Me.btnAcceptCategory = New System.Windows.Forms.Button()
        Me.backgroundProducts.SuspendLayout()
        Me.viewAddCategory.SuspendLayout()
        Me.SuspendLayout()
        '
        'backgroundProducts
        '
        Me.backgroundProducts.BackColor = System.Drawing.SystemColors.ScrollBar
        Me.backgroundProducts.Controls.Add(Me.viewAddCategory)
        Me.backgroundProducts.Controls.Add(Me.btnAddCategory)
        Me.backgroundProducts.Controls.Add(Me.tvCategories)
        Me.backgroundProducts.Location = New System.Drawing.Point(-14, 160)
        Me.backgroundProducts.Name = "backgroundProducts"
        Me.backgroundProducts.Size = New System.Drawing.Size(1395, 715)
        Me.backgroundProducts.TabIndex = 28
        '
        'viewAddCategory
        '
        Me.viewAddCategory.Controls.Add(Me.btnAcceptCategory)
        Me.viewAddCategory.Controls.Add(Me.tbxNameCategory)
        Me.viewAddCategory.Controls.Add(Me.lblCategoryName)
        Me.viewAddCategory.Controls.Add(Me.lblAddCategory)
        Me.viewAddCategory.Controls.Add(Me.btnCloseAddCategory)
        Me.viewAddCategory.Location = New System.Drawing.Point(490, 185)
        Me.viewAddCategory.Name = "viewAddCategory"
        Me.viewAddCategory.Size = New System.Drawing.Size(415, 185)
        Me.viewAddCategory.TabIndex = 2
        Me.viewAddCategory.Visible = False
        '
        'lblCategoryName
        '
        Me.lblCategoryName.AutoSize = True
        Me.lblCategoryName.Font = New System.Drawing.Font("Berlin Sans FB", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblCategoryName.Location = New System.Drawing.Point(86, 50)
        Me.lblCategoryName.Name = "lblCategoryName"
        Me.lblCategoryName.Size = New System.Drawing.Size(242, 17)
        Me.lblCategoryName.TabIndex = 3
        Me.lblCategoryName.Text = "Nombre de la categoría/subcategoría:"
        '
        'lblAddCategory
        '
        Me.lblAddCategory.AutoSize = True
        Me.lblAddCategory.Font = New System.Drawing.Font("Berlin Sans FB Demi", 15.75!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblAddCategory.Location = New System.Drawing.Point(120, 10)
        Me.lblAddCategory.Name = "lblAddCategory"
        Me.lblAddCategory.Size = New System.Drawing.Size(175, 24)
        Me.lblAddCategory.TabIndex = 35
        Me.lblAddCategory.Text = "Añadir Categoría"
        '
        'btnCloseAddCategory
        '
        Me.btnCloseAddCategory.BackColor = System.Drawing.SystemColors.ScrollBar
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
        Me.btnAddCategory.Font = New System.Drawing.Font("Berlin Sans FB", 9.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnAddCategory.Image = CType(resources.GetObject("btnAddCategory.Image"), System.Drawing.Image)
        Me.btnAddCategory.ImageAlign = System.Drawing.ContentAlignment.MiddleLeft
        Me.btnAddCategory.Location = New System.Drawing.Point(840, 60)
        Me.btnAddCategory.Name = "btnAddCategory"
        Me.btnAddCategory.Size = New System.Drawing.Size(125, 40)
        Me.btnAddCategory.TabIndex = 1
        Me.btnAddCategory.Text = "Añadir categría"
        Me.btnAddCategory.TextAlign = System.Drawing.ContentAlignment.MiddleRight
        Me.btnAddCategory.UseVisualStyleBackColor = True
        '
        'tvCategories
        '
        Me.tvCategories.BackColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.tvCategories.BorderStyle = System.Windows.Forms.BorderStyle.None
        Me.tvCategories.Font = New System.Drawing.Font("Berlin Sans FB", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tvCategories.ForeColor = System.Drawing.SystemColors.ButtonFace
        Me.tvCategories.Location = New System.Drawing.Point(398, 50)
        Me.tvCategories.Name = "tvCategories"
        Me.tvCategories.Size = New System.Drawing.Size(599, 460)
        Me.tvCategories.TabIndex = 0
        '
        'imgNosbey
        '
        Me.imgNosbey.BackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.BackgroundImage = CType(resources.GetObject("imgNosbey.BackgroundImage"), System.Drawing.Image)
        Me.imgNosbey.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center
        Me.imgNosbey.Enabled = False
        Me.imgNosbey.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(68, Byte), Integer))
        Me.imgNosbey.FlatAppearance.MouseDownBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatAppearance.MouseOverBackColor = System.Drawing.Color.Transparent
        Me.imgNosbey.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.imgNosbey.Location = New System.Drawing.Point(532, 15)
        Me.imgNosbey.Name = "imgNosbey"
        Me.imgNosbey.Size = New System.Drawing.Size(303, 128)
        Me.imgNosbey.TabIndex = 30
        Me.imgNosbey.UseVisualStyleBackColor = False
        '
        'btnCloseApp
        '
        Me.btnCloseApp.BackColor = System.Drawing.SystemColors.ScrollBar
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
        Me.btnPrevious.BackColor = System.Drawing.SystemColors.ScrollBar
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
        'tbxNameCategory
        '
        Me.tbxNameCategory.Font = New System.Drawing.Font("Berlin Sans FB", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.tbxNameCategory.Location = New System.Drawing.Point(112, 80)
        Me.tbxNameCategory.Name = "tbxNameCategory"
        Me.tbxNameCategory.Size = New System.Drawing.Size(190, 24)
        Me.tbxNameCategory.TabIndex = 36
        Me.tbxNameCategory.TextAlign = System.Windows.Forms.HorizontalAlignment.Center
        '
        'btnAcceptCategory
        '
        Me.btnAcceptCategory.Font = New System.Drawing.Font("Berlin Sans FB", 9.75!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnAcceptCategory.Location = New System.Drawing.Point(170, 115)
        Me.btnAcceptCategory.Name = "btnAcceptCategory"
        Me.btnAcceptCategory.Size = New System.Drawing.Size(75, 25)
        Me.btnAcceptCategory.TabIndex = 37
        Me.btnAcceptCategory.Text = "Aceptar"
        Me.btnAcceptCategory.UseVisualStyleBackColor = True
        '
        'CategoriesScreen
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.BackColor = System.Drawing.Color.FromArgb(CType(CType(48, Byte), Integer), CType(CType(54, Byte), Integer), CType(CType(65, Byte), Integer))
        Me.ClientSize = New System.Drawing.Size(1366, 768)
        Me.Controls.Add(Me.btnPrevious)
        Me.Controls.Add(Me.btnCloseApp)
        Me.Controls.Add(Me.imgNosbey)
        Me.Controls.Add(Me.backgroundProducts)
        Me.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None
        Me.Name = "CategoriesScreen"
        Me.Text = "CategoriesScreen"
        Me.backgroundProducts.ResumeLayout(False)
        Me.viewAddCategory.ResumeLayout(False)
        Me.viewAddCategory.PerformLayout()
        Me.ResumeLayout(False)

    End Sub

    Friend WithEvents backgroundProducts As Panel
    Friend WithEvents imgNosbey As Button
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
End Class
